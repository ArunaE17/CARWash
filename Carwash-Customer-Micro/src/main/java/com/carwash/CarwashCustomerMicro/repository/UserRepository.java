package com.carwash.CarwashCustomerMicro.repository;

import com.carwash.CarwashCustomerMicro.model.Roles;
import com.carwash.CarwashCustomerMicro.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Set;

public interface UserRepository extends MongoRepository <Users, String>{
    Users findByEmail(String email);
    List<Users> findByRolesIn(Set<Roles> roles);
}
