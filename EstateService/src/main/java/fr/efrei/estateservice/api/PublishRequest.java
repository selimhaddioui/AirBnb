package fr.efrei.estateservice.api;

public record PublishRequest(String userId, String userToken, String name, String city, String photo, String state) {
}
