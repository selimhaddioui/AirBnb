package fr.efrei.userservice.service;

import fr.efrei.userservice.core.UserEntity;
import fr.efrei.userservice.dao.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

@Service
public class UserService {
    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder().withoutPadding();
    private static final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserEntity createUser(String email, String password, String firstName, String lastName, boolean isLessor) {
        UserEntity user = new UserEntity(generateToken(), email, hashPassword(password), firstName, lastName, isLessor);
        if(userRepository.findByEmail(email).isPresent()) {
            return null;
        }
        user.setToken(generateToken());
        return userRepository.save(user);
    }

    public void signOff(String userId) {
        Object userObject = getUserById(userId);
        if(userObject == null) {
            return;
        }
        UserEntity user = (UserEntity) userObject;
        user.setToken(null);
        userRepository.save(user);
    }

    public List<UserEntity> getUsers() {
        return (List<UserEntity>) userRepository.findAll();
    }

    public Object getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public Object getUserById(String userId) {
        return userRepository.findById(userId).orElse(null);
    }

    private String generateToken() {
        byte[] randomBytes = new byte[24];
        secureRandom.nextBytes(randomBytes);
        return base64Encoder.encodeToString(randomBytes);
    }

    public UserEntity login(String email, String password) {
        if(email == null) {
            return null;
        }
        Object userObject = getUserByEmail(email);
        if(userObject == null) {
            return null;
        }
        UserEntity user = (UserEntity) userObject;
        if(!user.isPasswordCorrect(passwordEncoder, password)) {
            return null;
        }
        user.setToken(generateToken());
        userRepository.save(user);
        return user;
    }

    public boolean checkToken(String userId, String tokenToCheck) {
        Object userObject = getUserById(userId);
        if(userObject == null) {
            return false;
        }
        UserEntity user = (UserEntity) userObject;
        return user.getToken() != null && tokenToCheck != null && tokenToCheck.equals(user.getToken());
    }

    private static String hashPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
