package com.carwash.CarwashCustomerMicro.controller;

import com.carwash.CarwashCustomerMicro.wrappermodel.OrderReceipt;
import com.carwash.CarwashCustomerMicro.model.orderDetails;
import com.carwash.CarwashCustomerMicro.model.rating;
import com.carwash.CarwashCustomerMicro.model.washPack;
import com.carwash.CarwashCustomerMicro.repository.ratingRepository;
import com.carwash.CarwashCustomerMicro.service.ratingService;
import com.carwash.CarwashCustomerMicro.service.serviceUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins ="http://localhost:4200" )

public class userServiceController {

    Logger logger = LoggerFactory.getLogger(userServiceController.class);
    @Autowired
    ratingRepository rr;
    @Autowired
    ratingService rs;
    @Autowired
    serviceUser us;

    @PostMapping("/addRating")
    public rating addRating(@RequestBody rating rate) {

        logger.info("controller accessed");
        return rs.addRating(rate);
    }


    @GetMapping("/getAllRatings")
    public List<rating> getAllRatings() {
        return rs.getAllRatings();
    }

//    @GetMapping("/washerSpecificRating/{washerName}")
//    public List<rating> washerSpecific(@PathVariable String washerName) {
//        return rs.washerSpecific(washerName);
//    }


    @PostMapping("/addOrder")
    public orderDetails addOrder(@RequestBody orderDetails order) {
        return us.addOrder(order);
    }

    @PostMapping("/updateOrder")
    public orderDetails updateOrder(@RequestBody orderDetails order) {
        return us.updateOrder(order);
    }

    @PutMapping("/cancelOrder")
    public String cancelOrder(@RequestBody orderDetails order) {
        return us.cancelOrder(order);
    }


    @GetMapping("/seeWp")
    public List<washPack> getAllWp() {
        return us.getAllWp();
    }

//    @GetMapping("/getReceipt/{id}")
//    public OrderReceipt getReceipt(@PathVariable String id) {
//        return us.getReciept(id);
//    }

    @GetMapping("/getReceipt/{id}")
    public OrderReceipt getReceipt(@PathVariable String id){
        return us.getReciept(id);
    }
}


