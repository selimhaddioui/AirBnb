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

    public EstateEntity createEstate(String id) {
        if(estateRepository.findById(id).isPresent()){
            return null;
        }
        return estateRepository.save(new EstateEntity(id));
    }

    public List<EstateEntity> getEstates() {
        return (List<EstateEntity>) estateRepository.findAll();
    }

    public EstateEntity findEstate(String estateId) {
        return estateRepository.findById(estateId).orElse(null);
    }

    public void deleteEstate(String id) {
        estateRepository.deleteById(id);
    }
}
