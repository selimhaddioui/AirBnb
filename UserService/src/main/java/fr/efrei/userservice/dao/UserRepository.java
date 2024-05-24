package fr.efrei.userservice.dao;

import fr.efrei.userservice.core.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<UserEntity, String> {
    Optional<Object> findByEmail(String email);
}
