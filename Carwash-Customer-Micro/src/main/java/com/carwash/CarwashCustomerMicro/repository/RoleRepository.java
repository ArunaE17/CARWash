package com.carwash.CarwashCustomerMicro.repository;

import com.carwash.CarwashCustomerMicro.model.Roles;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Roles,String> {
    Roles findByRole(String role);
}
