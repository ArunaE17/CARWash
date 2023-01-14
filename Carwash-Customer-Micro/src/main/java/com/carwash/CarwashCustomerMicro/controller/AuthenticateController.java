package com.carwash.CarwashCustomerMicro.controller;


import com.carwash.CarwashCustomerMicro.model.AuthenticationRequest;
import com.carwash.CarwashCustomerMicro.model.Users;
import com.carwash.CarwashCustomerMicro.repository.UserRepository;
import com.carwash.CarwashCustomerMicro.service.CustomUserDetailsService;
import com.carwash.CarwashCustomerMicro.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")

public class AuthenticateController {
    @RequestMapping("/hello")
    public String hello(){
        return "hello user";
    }

    //to authenticate the request
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    UserRepository ur;
    @Autowired
    private CustomUserDetailsService userService;


    //authentication end point
    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        //logging username to console
        String username = authenticationRequest.getEmail();
        System.out.println(username);
        try {
            authenticationManager.authenticate((new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())));
        }
    //if the authentication fails to handle throw exception
        catch (BadCredentialsException e){
            throw new Exception("Invalid username or Password");
        }

        //logging
        System.out.println(authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,authenticationRequest.getPassword())));
        String token = jwtUtil.createToken(username, this.ur.findByEmail(username).getRoles());
        Users ExistingUser = userService.findUserByEmail(username);
        return new ResponseEntity<>(userService.updateTokenById(ExistingUser,token), HttpStatus.OK);

    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Users user) {
        Users userExists = userService.findUserByEmail(user.getEmail());
        if (userExists != null) {
            return new ResponseEntity<>("User exists already, try with a different email address", HttpStatus.OK);

        }
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);


    }



}
