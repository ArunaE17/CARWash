package com.carwash.CarwashCustomerMicro.repository;

import com.carwash.CarwashCustomerMicro.model.rating;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ratingRepository extends MongoRepository <rating,Integer> {
}
