package com.carwash.CarwashAdminMicro.Repository;

import com.carwash.CarwashAdminMicro.models.Washer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WasherRepository extends MongoRepository<Washer,String> {
}
