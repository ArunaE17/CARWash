package com.carwash.CarwashAdminMicro.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Promo {
    @Id
    private String id;
    private String code;
    private double price;
    private String description;
    private boolean active;
}
