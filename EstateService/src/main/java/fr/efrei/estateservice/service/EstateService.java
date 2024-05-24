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

    public EstateService(EstateRepository estateRepository) {
        this.estateRepository = estateRepository;
    }

    public EstateEntity createEstate(String lessorId, String name, String city, String photo, String state) {
        return estateRepository.save(new EstateEntity(generateToken(), lessorId, name, city, photo, state));
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

    private String generateToken() {
        byte[] randomBytes = new byte[24];
        secureRandom.nextBytes(randomBytes);
        return base64Encoder.encodeToString(randomBytes);
    }
}
