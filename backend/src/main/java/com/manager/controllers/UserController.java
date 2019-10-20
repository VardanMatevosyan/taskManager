package com.manager.controllers;


import com.manager.models.User;
import com.manager.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
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

    @Secured({ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER})
    @GetMapping(value = "/user")
    public List<User> listUser() {
        return userService.findAll();
    }

    @Secured({ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER})
    @PostMapping(value = "/user")
    public User create(@RequestBody User user) {
        return userService.save(user);
    }

    @Secured({ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER})
    @GetMapping(value = "/user/{id}")
    public User findOneUser(@PathVariable Integer id) {
        return userService.findUser(id);
    }

    //moder should update any user and user should update only himself
    @Secured({ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER})
    @PutMapping(value = "/user/{id}")
    public User update(@PathVariable Integer id, @RequestBody User user) {
        user.setId(id);
        return userService.save(user);
    }

    @Secured({ROLE_ADMIN})
    @DeleteMapping(value = "/user/{id}")
    public void delete(@PathVariable(value = "id") Integer id) {
        userService.delete(id);
    }

}
