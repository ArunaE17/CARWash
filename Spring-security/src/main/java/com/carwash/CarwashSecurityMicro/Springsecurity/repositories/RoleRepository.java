package com.carwash.CarwashSecurityMicro.Springsecurity.repositories;

import com.carwash.CarwashSecurityMicro.Springsecurity.models.Roles;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Roles,String> {
    Roles findByRole(String role);
}
