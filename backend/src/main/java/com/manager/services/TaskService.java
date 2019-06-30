package com.manager.services;

import com.manager.models.Task;
import com.manager.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    TaskService(final TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    public Task update(final Task task) {
    	return taskRepository.save(task);
    }

}
