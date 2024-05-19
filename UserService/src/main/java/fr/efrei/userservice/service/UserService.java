package fr.efrei.userservice.service;

import fr.efrei.userservice.core.UserEntity;
import fr.efrei.userservice.dao.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(String email, String password) {
        userRepository.save(new UserEntity(email, password));
    }

    public List<UserEntity> getUsers() {
        return (List<UserEntity>) userRepository.findAll();
    }
}
