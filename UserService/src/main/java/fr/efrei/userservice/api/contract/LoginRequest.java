package fr.efrei.userservice.api.contract;

public record LoginRequest(
        String email,
        String password
) {}