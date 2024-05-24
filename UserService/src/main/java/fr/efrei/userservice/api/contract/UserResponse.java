package fr.efrei.userservice.api.contract;

import fr.efrei.userservice.core.UserEntity;

public record UserResponse(
        String id,
        String token,
        String email,
        String firstName,
        String lastName,
        boolean isLessor
) {
    public UserResponse(UserEntity userEntity) {
        this(
                userEntity.getId(),
                userEntity.getToken(),
                userEntity.getEmail(),
                userEntity.getFirstName(),
                userEntity.getLastName(),
                userEntity.isLessor()
        );
    }
}
