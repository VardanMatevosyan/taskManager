package com.manager.controllers;


import com.manager.configuration.security.CurrentUser;
import com.manager.configuration.security.UserPrincipal;
import com.manager.configuration.security.exceptions.ResourceNotFoundException;
import com.manager.models.User;
import com.manager.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class UserController {
    public static final String SUCCESS = "success";
    public static final String ROLE_ADMIN = "ROLE_ADMIN";
    public static final String ROLE_USER = "ROLE_USER";
    public static final String ROLE_MODERATOR = "ROLE_MODERATOR";

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users/me")
    @PreAuthorize("hasRole('ROLE_USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userService.findUserById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    @Secured({ROLE_ADMIN, ROLE_MODERATOR})
    @GetMapping(value = "/users")
    public List<User> listUser() {
        return userService.findAll();
    }

    @Secured({ROLE_ADMIN, ROLE_MODERATOR})
    @PostMapping(value = "/users")
    public User create(@RequestBody User user) {
        return userService.save(user);
    }

    @Secured({ROLE_ADMIN, ROLE_MODERATOR})
    @GetMapping(value = "/users/{id}")
    public User findOneUser(@PathVariable Integer id) {
        return userService.findUser(id);
    }

    //:todo moder should update any user and user should update only himself
    @Secured({ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER})
    @PutMapping(value = "/users/{id}")
    public User update(@PathVariable Integer id, @RequestBody User user) {
        user.setId(id);
        return userService.save(user);
    }

    @Secured({ROLE_ADMIN})
    @DeleteMapping(value = "/users/{id}")
    public void delete(@PathVariable(value = "id") Integer id) {
        userService.delete(id);
    }

    @RequestMapping("/users/userInfo")
    public Principal user(Principal user) {
        return user;
    }

}
