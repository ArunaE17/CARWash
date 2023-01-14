package com.carwash.CarwashAdminMicro.Service;

import com.carwash.CarwashAdminMicro.models.Users;
import com.carwash.CarwashAdminMicro.models.orderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Service
public class adminService {
    @Autowired
    private RestTemplate restTemplate;
    String url = "http://carwash-order-server/orders";
    public orderDetails assignWasher(orderDetails order){
        HttpHeaders header = new HttpHeaders();
        header.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<orderDetails> entity = new HttpEntity<>(order,header);
        return restTemplate.exchange(url+"/assignWasher/", HttpMethod.PUT,entity,orderDetails.class).getBody();
    }
    //getOneWasher
    //washerSpecificRatings
//    //updateprofile
//    public Users updateProfile(String id, Users user){
//        Users existingUser
//    }

}

