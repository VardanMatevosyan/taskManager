package com.manager.controllers;

import com.manager.models.Task;
import com.manager.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.Timestamp;

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
    @ResponseBody
    public Page<Task> getTasks(@RequestParam final String page, @RequestParam final String size, @RequestParam final String sort) {
        return this.taskService.getAll(Integer.valueOf(page), Integer.valueOf(size), sort);
    }

    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Task update(@RequestBody final Task task) {
    	return this.taskService.update(task);
    }

    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public Task save(@RequestBody final Task task) {
        task.setCreateDate(new Timestamp(System.currentTimeMillis()));
        return this.taskService.addTask(task);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable(name = "id") final String id) {
        this.taskService.deleteTask(id);
    }
}
