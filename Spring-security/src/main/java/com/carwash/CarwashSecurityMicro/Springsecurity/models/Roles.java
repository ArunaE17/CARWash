package com.carwash.CarwashSecurityMicro.Springsecurity.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="roles")
public class Roles {
    @Id
    private String id;
    @Indexed(unique=true, direction= IndexDirection.DESCENDING,dropDups=true)
    private String role;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    @Override
    public String toString(){
        return this.role;
    }
}
