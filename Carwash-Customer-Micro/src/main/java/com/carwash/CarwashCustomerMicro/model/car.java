package com.carwash.CarwashCustomerMicro.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class car {

    @Id
    int id;
    String name;
    String model;
    String nameplate;
    public car(){

    }
    public car(int id, String name, String model,String nameplate) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.nameplate=nameplate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getNameplate() {
        return nameplate;
    }

    public void setNameplate(String nameplate) {
        this.nameplate = nameplate;
    }

    @Override
    public String toString() {
        return "car{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", model='" + model + '\'' +
                ", nameplate='" + nameplate + '\'' +
                '}';
    }
}


