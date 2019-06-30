package com.manager.controllers;

import com.manager.models.Task;
import com.manager.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/tasks")
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(final TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(produces = "application/json")
    public List<Task> getTasks() {
        return this.taskService.getAll();
    }

    @PutMapping(value = "/update", produces = "application/json")
    public Task update(@RequestBody final Task task) {
    	return this.taskService.update(task);
    }
}
