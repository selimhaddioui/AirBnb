package fr.efrei.BookingService.api;

import fr.efrei.BookingService.core.BookingEntity;

public record BookingResponse(String bookingId, String estateId, String tenantId, String bookingStart,
                              String bookingEnd, String apartmentTitle) {
    public BookingResponse(BookingEntity bookingEntity) {
        this(
                bookingEntity.getBookingId(),
                bookingEntity.getEstateId(),
                bookingEntity.getTenantId(),
                bookingEntity.getBookingStart(),
                bookingEntity.getBookingEnd(),
                bookingEntity.getApartmentTitle()
        );
    }
}
