package com.carwash.CarwashSecurityMicro.Springsecurity.repositories;

import com.carwash.CarwashSecurityMicro.Springsecurity.models.Roles;
import com.carwash.CarwashSecurityMicro.Springsecurity.models.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Set;

public interface UserRepository extends MongoRepository <Users, String>{
    Users findByEmail(String email);
    List<Users> findByRolesIn(Set<Roles> roles);
}
