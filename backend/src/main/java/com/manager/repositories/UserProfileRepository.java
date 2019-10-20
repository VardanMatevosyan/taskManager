package com.manager.repositories;

import com.manager.models.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "userProfile", path = "userProfile")
@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {
}
