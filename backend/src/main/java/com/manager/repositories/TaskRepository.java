package com.manager.repositories;

import com.manager.models.Task;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

}
