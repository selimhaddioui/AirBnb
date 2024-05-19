package fr.efrei.userservice.api;

import fr.efrei.userservice.core.UserEntity;

public record UserResponse(String email, String password) {
    public UserResponse(UserEntity userEntity) {
        this(userEntity.getEmail(), userEntity.getPassword());
    }
}
