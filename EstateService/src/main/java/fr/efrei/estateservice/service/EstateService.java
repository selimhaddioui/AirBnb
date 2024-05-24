package fr.efrei.estateservice.service;

import fr.efrei.estateservice.core.EstateEntity;
import fr.efrei.estateservice.dao.EstateRepository;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

@Service
public class EstateService {
    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder().withoutPadding();
    private final EstateRepository estateRepository;
    private final HttpService httpService;

    public EstateService(EstateRepository estateRepository, HttpService httpService){
        this.estateRepository = estateRepository;
        this.httpService = httpService;
    }

    public EstateEntity createEstate(String userId, String userToken, String name, String city, String photo, String state) {
        if(!httpService.isUserAllowed(userId, userToken)) {
            return null;
        }
        return estateRepository.save(new EstateEntity(generateToken(), userId, name, city, photo, state));
    }

    public List<EstateEntity> getEstates() {
        return (List<EstateEntity>) estateRepository.findAll();
    }

    public EstateEntity findEstate(String estateId) {
        return estateRepository.findById(estateId).orElse(null);
    }

    public void deleteEstate(String userId, String userToken, String estateId) {
        if(!httpService.isUserAllowed(userId, userToken)) {
            return;
        }
        var estate = findEstate(estateId);
        if(estate == null || !estate.getLessorId().equals(userId)) {
            return;
        }
        estateRepository.deleteById(estateId);
    }

    private String generateToken() {
        byte[] randomBytes = new byte[24];
        secureRandom.nextBytes(randomBytes);
        return base64Encoder.encodeToString(randomBytes);
    }
}
