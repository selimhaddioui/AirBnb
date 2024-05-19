package fr.efrei.userservice.dao;

import fr.efrei.userservice.core.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, String> {
}
