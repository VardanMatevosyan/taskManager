package com.manager.repositories;

import com.manager.models.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
  Page<Task> findByUserId(Integer userId, Pageable pageable);

  @Modifying
  @Query("UPDATE Task SET done = :done where id = :id")
  int updateDone(Boolean done, Integer id);
}
