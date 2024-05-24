package fr.efrei.estateservice.service;

import fr.efrei.estateservice.core.EstateEntity;
import fr.efrei.estateservice.dao.EstateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstateService {
    private final EstateRepository estateRepository;

    public EstateService(EstateRepository estateRepository) {
        this.estateRepository = estateRepository;
    }

    public void createEstate(String id) {
        estateRepository.save(new EstateEntity(id));
    }

    public List<EstateEntity> getEstates() {
        return (List<EstateEntity>) estateRepository.findAll();
    }

    public void deleteEstate(String id) {
        estateRepository.deleteById(id);
    }
  
    public EstateEntity publishEstate(String id) throws Exception {
        if(estateRepository.findById(id).isPresent()){
          return null;
        }
        estateRepository.save(new EstateEntity(id));
    }

    public EstateEntity findEstate(String estateId) {
        return estateRepository.findById(estateId).get();
    }

}
