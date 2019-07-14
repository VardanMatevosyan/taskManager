package com.manager.models;


import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

/**
 * Task class.
 * @author Matevosyan Vardan.
 * @version 1.0
 * created 25.05.2019
 */

@Component
@Entity(name = "task")
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "description")
    private String description;

    @Column(name = "create_date")
    private Timestamp createDate;

    @Column(name = "done")
    private boolean done;

    /**
     * Default constructor.
     */
    public Task() {
    }

    /**
     * Custom constructor.
     * @param id  task id.
     * @param description task description.
     * @param done task done.
     */

    public Task(final String id, final String description, final Boolean done) {
        this.id = id;
        this.description = description;
        this.createDate = new Timestamp(System.currentTimeMillis());
    }


    /**
     * Getter for task id.
     * @return task id.
     */

    public String getId() {
        return id;
    }

    /**
     * Getter for task description.
     * @return task description.
     */
    public String getDescription() {
        return description;
    }

    /**
     * Getter for task create date.
     * @return task create date.
     */
    public Timestamp getCreateDate() {
        return createDate;
    }

    /**
     * Getter for task done.
     * @return task done.
     */
    public boolean getDone() {
        return done;
    }


    /**
     * Setter for task id.
     * @param id task id.
     */

    public void setId(String id) {
        this.id = id;
    }

    /**
     * Setter for task description.
     * @param description task description.
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Setter for task createDate.
     * @param createDate task createDate.
     */
    public void setCreateDate(Timestamp createDate) {
        this.createDate = createDate;
    }

    /**
     * Setter for task done.
     * @param done task done.
     */
    public void setDone(boolean done) {
        this.done = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Task task = (Task) o;
        return Objects.equals(id, task.id)
                && Objects.equals(description, task.description)
                && Objects.equals(createDate, task.createDate)
                && Objects.equals(done, task.done);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, createDate, done);
    }
}
