package com.carwash.CarwashAdminMicro.Service;

import com.carwash.CarwashAdminMicro.Repository.PromoRepository;
import com.carwash.CarwashAdminMicro.models.Promo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromoService {
    @Autowired
    private PromoRepository promoRepository;

    public void save (Promo promo){
        promoRepository.save(promo);
    }

    public List<Promo> findAll(){
        List<Promo> promoList = promoRepository.findAll();
        if(promoList.size()>0){
            return promoList;
        }
        return null;
    }


    public String deleteById(String id){
        if(promoRepository.findById(id).isPresent()){
            promoRepository.deleteById(id);
            return "Successfully Deleted";
        }
        return "Could not  find any Item";
    }
}
