package com.carwash.CarwashAdminMicro.Repository;

import com.carwash.CarwashAdminMicro.models.washPack;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface washPackRepository extends MongoRepository<washPack, String> {
}


