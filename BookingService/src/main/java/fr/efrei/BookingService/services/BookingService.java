package fr.efrei.BookingService.services;

import fr.efrei.BookingService.core.BookingEntity;

public class BookingService {
    public BookingEntity book(String estateId, String tenantId) {
        /* Check for availability */
        /* Create a booking from DAO */
        /* return it */
        return new BookingEntity("bookingId", estateId, tenantId);
    }

    public void cancel(String bookingId) {
        /* Check for existence */
        /* Delete the booking from DAO */
    }
}
