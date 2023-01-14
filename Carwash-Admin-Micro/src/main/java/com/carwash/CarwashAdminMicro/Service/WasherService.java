package com.carwash.CarwashAdminMicro.Service;

import com.carwash.CarwashAdminMicro.Repository.WasherRepository;
import com.carwash.CarwashAdminMicro.models.Washer;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class WasherService {
    @Autowired
    private WasherRepository washerRepository;
    public List<Washer> findAll(){
        List<Washer> washerList = washerRepository.findAll();
        if(washerList.size()>0){
            return washerList;
        }
        return null;
    }

    public String deleteById(String id){
        if(washerRepository.findById(id).isPresent()){
            washerRepository.deleteById(id);
            return "Successfully Deleted";
        }
        return "Could not Find any Item";
    }
}
