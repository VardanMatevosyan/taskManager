package com.manager.services;

import com.manager.models.Task;
import com.manager.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    TaskService(final TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Page<Task> getAll(final int page, final int size, final String sort) {
        return taskRepository.findAll(PageRequest.of(page, size, Sort.by(sort)));
    }

    public Task update(final Task task) {
    	return taskRepository.save(task);
    }

    public Task addTask(final Task task) {
        return this.taskRepository.save(task);
    }

    public void deleteTask(Integer id) {
        this.taskRepository.deleteById(id);
    }

}
