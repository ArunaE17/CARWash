package com.carwash.CarwashAdminMicro.controller;

import com.carwash.CarwashAdminMicro.Service.adminService;
import com.carwash.CarwashAdminMicro.Service.washPackService;
import com.carwash.CarwashAdminMicro.models.orderDetails;
import com.carwash.CarwashAdminMicro.models.washPack;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admins")
@CrossOrigin(origins = "*")


public class adminController {

    Logger logger = LoggerFactory.getLogger(adminController.class);
    @Autowired
washPackService wps;
    @Autowired
adminService as;

    @PostMapping("/addWp")
    public washPack addWp(@RequestBody washPack washPack){
        logger.info("controller accessed");
        return wps.addWp(washPack);
    }
    @GetMapping("/findallWp")
    public List<washPack> findallWp(){
        return wps.findAllWp();
    }
    @GetMapping("/findoneWp/{id}")
    public ResponseEntity<washPack> findWpById(@PathVariable String id){
        return wps.findById(id);
    }

    @GetMapping("/wpByName/{name}")
    public washPack findWpByName(@PathVariable String name){
        return wps.findByName(name);
    }
    @DeleteMapping("/deleteWp/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteById(@PathVariable String id){
        return wps.deleteWp(id);
    }
    @PutMapping("/updateWp/{id}")
    public ResponseEntity<washPack> updateById(@PathVariable String id,@RequestBody washPack pack){
        return wps.updateWp(id,pack);
    }
    @PutMapping("/assignWasher")
    public orderDetails assignWasher(@RequestBody orderDetails order){
        return as.assignWasher(order);
    }
}