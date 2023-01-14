package com.carwash.CarwashAdminMicro.Service;


import com.carwash.CarwashAdminMicro.Repository.RoleRepository;
import com.carwash.CarwashAdminMicro.Repository.adminRepository;
import com.carwash.CarwashAdminMicro.models.Roles;
import com.carwash.CarwashAdminMicro.models.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private adminRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(email);
        if (user != null) {
            List<GrantedAuthority> authorities = getUserAuthority(user.getRoles());
            return builderUserForAuthenticantion(user, authorities);

        } else {
            throw new UsernameNotFoundException("username not found in database");

        }
    }

    public List<GrantedAuthority> getUserAuthority (Set<Roles> userRoles) {
        Set<GrantedAuthority> roles = new HashSet<>();
        userRoles.forEach((role) -> {
            roles.add(new SimpleGrantedAuthority(role.getRole()));
        });
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>(roles);
        return grantedAuthorities;
    }

    public UserDetails builderUserForAuthenticantion(Users user, List<GrantedAuthority> authorities){
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);

    }



    //find user by mailid
    public Users findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    //update the token everytime user logins
    public Users updateTokenById(Users ExistingUser, String token) {
        ExistingUser.setToken(token);
        return userRepository.save(ExistingUser);
    }

    //After registering save user by his role
    public Users saveUser(Users user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setEnabled(true);
        System.out.println(user.getRoles());
        List<Roles> washer = user.getRoles().stream().filter(x -> x.getRole().contains("WASHER")).collect(Collectors.toList());
        List<Roles> customer=user.getRoles().stream().filter(x->x.getRole().contains("USER")).collect(Collectors.toList());
        if (washer.size() == 1) {

            Roles userRole = roleRepository.findByRole("WASHER");
            System.out.println("inside washer");

            //user.setRoles((new HashSet<>(Arrays.asList(userRole))));
            user.setRoles((new HashSet<>(Arrays.asList(userRole))));
        }
        else if (customer.size() == 1) {

            Roles userRole = roleRepository.findByRole("USER");
            System.out.println("inside admin");
            user.setRoles((new HashSet<>(Arrays.asList(userRole))));

        } else {

            Roles userRole = roleRepository.findByRole("ADMIN");
            System.out.println("inside user");
            user.setRoles((new HashSet<>(Arrays.asList(userRole))));
        }
        System.out.println(user);
        return userRepository.save(user);
    }





}
