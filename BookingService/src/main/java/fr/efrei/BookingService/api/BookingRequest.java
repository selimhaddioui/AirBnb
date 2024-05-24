package fr.efrei.BookingService.api;

public record BookingRequest(String estateId, String tenantId, String tenantToken, String bookingStart, String bookingEnd) {
}
