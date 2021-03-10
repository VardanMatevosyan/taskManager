package com.manager.services;

import com.manager.configuration.security.UserPrincipal;
import com.manager.models.Task;
import com.manager.repositories.TaskRepository;
import com.manager.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;

@Component
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    @Autowired
    TaskService(final TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    public Page<Task> getAll(UserPrincipal userPrincipal, final int page, final int size, final String sort) {
        return taskRepository.findByUserId(userPrincipal.getId(), PageRequest.of(page, size, Sort.by(sort)));
    }

    @Transactional
    public int updateDone(Task task) {
    	return taskRepository.updateDone(task.getDone(), task.getId());
    }

    @Transactional
    public Task addTask(UserPrincipal userPrincipal, final Task task) {
        task.setCreateDate(new Timestamp(System.currentTimeMillis()));
        task.setUser(userRepository.getOne(userPrincipal.getId()));
        return this.taskRepository.save(task);
    }

    public void deleteTask(Integer id) {
        this.taskRepository.deleteById(id);
    }

}
