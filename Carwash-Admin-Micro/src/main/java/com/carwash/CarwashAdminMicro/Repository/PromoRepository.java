package com.carwash.CarwashAdminMicro.Repository;

import com.carwash.CarwashAdminMicro.models.Promo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PromoRepository extends MongoRepository<Promo,String> {
    Promo findByCode(String code);
}
