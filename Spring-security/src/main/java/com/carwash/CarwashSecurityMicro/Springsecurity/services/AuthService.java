package com.carwash.CarwashSecurityMicro.Springsecurity.services;

import com.carwash.CarwashSecurityMicro.Springsecurity.exceptionHandlers.APIRequestException;
import com.carwash.CarwashSecurityMicro.Springsecurity.models.Roles;
import com.carwash.CarwashSecurityMicro.Springsecurity.models.Users;
import com.carwash.CarwashSecurityMicro.Springsecurity.repositories.RoleRepository;
import com.carwash.CarwashSecurityMicro.Springsecurity.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuthService {
    @Autowired
    private UserRepository ur;
    @Autowired
    private RoleRepository roleRepository;

    //get all users from database
    public List<Users> getAllUser(){
        return ur.findAll();
    }
    public Users getSpecificUser(String name){
        return ur.findAll().stream().filter(x->x.getFullname().contains(name)).findFirst().get();

    }
    public ResponseEntity<Map<String,Boolean>> deleteUser(String id){
        Users user = ur.findById(id).orElseThrow(()->new APIRequestException("User with Id -> "+id+" not found, deletion failed"));
        ur.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("User Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    //to find list of users with role
    public List<Users> findListByRole(String role) {
        Roles r = roleRepository.findByRole(role);
        Set<Roles> roles = new HashSet<>();
        roles.add(r);
        return ur.findByRolesIn(roles);
    }
    public Users getWasher(String name){
        Roles r =roleRepository.findByRole("WASHER");
        Set<Roles> roles= new HashSet<>();
        roles.add(r);
        return ur.findByRolesIn(roles).stream().filter(x->x.getFullname().contains(name)).findFirst().orElseThrow(()-> new APIRequestException("Washer with name "+name+" not found"));
    }
}
