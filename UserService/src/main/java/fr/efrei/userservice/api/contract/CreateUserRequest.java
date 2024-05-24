package fr.efrei.userservice.api.contract;

public record CreateUserRequest(
        String email,
        String password,
        String firstName,
        String lastName,
        boolean isLessor
) {}