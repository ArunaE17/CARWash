package com.carwash.CarwashAdminMicro.Repository;


import com.carwash.CarwashAdminMicro.models.Roles;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Roles,String> {
    Roles findByRole(String role);
}
