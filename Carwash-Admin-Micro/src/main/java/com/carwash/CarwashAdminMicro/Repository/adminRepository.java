package com.carwash.CarwashAdminMicro.Repository;

import com.carwash.CarwashAdminMicro.models.Roles;
import com.carwash.CarwashAdminMicro.models.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Set;

public interface adminRepository extends MongoRepository<Users, String> {
    Users findByEmail(String email);
    List<Users> findByRolesIn(Set<Roles> roles);
}
