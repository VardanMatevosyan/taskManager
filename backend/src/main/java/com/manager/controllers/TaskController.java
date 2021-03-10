package com.manager.controllers;

import com.manager.configuration.security.CurrentUser;
import com.manager.configuration.security.UserPrincipal;
import com.manager.models.Task;
import com.manager.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import static com.manager.controllers.UserController.ROLE_ADMIN;
import static com.manager.controllers.UserController.ROLE_MODERATOR;
import static com.manager.controllers.UserController.ROLE_USER;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/tasks")
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(final TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(produces = "application/json")
    @ResponseBody
    public Page<Task> getTasks(
        @CurrentUser UserPrincipal userPrincipal,
        @RequestParam final String page,
        @RequestParam final String size,
        @RequestParam final String sort) {
        return this.taskService.getAll(userPrincipal, Integer.parseInt(page), Integer.parseInt(size), sort);
    }

    //:todo moder should update only his tasks
    @Secured({ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER})
    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public int updateDone(@RequestBody Task task) {
    	return this.taskService.updateDone(task);
    }

    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Task save(@CurrentUser UserPrincipal userPrincipal, @RequestBody final Task task) {
        return this.taskService.addTask(userPrincipal, task);
    }

    //:todo moder should update only his tasks
    @Secured({ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER})
    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable(name = "id") final Integer id) {
        this.taskService.deleteTask(id);
    }
}
