package com.manager.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;

/**
 *  Role class.
 *  @author Matevosyan Vardan.
 *  @version 1.0
 *  created 18.10.2019
 */
@Component
@Entity(name = "Role")
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", unique = true)
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
