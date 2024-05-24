package fr.efrei.estateservice.api;

public record PublishRequest(String lessorId, String lessorToken, String name, String city, String photo, String state) {
}
