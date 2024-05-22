package fr.efrei.BookingService.services;

import fr.efrei.BookingService.core.BookingEntity;

public class BookingService {
    public BookingEntity book(String bookingId, String estateId, String tenantId, String bookingStart, String bookingEnd) {
        /* Check for availability */
        /* Create a booking from DAO */
        /* return it */
        return new BookingEntity("bookingId", estateId, tenantId, bookingStart, bookingEnd);
    }

    public void cancel(String bookingId) {
        /* Check for existence */
        /* Delete the booking from DAO */

    }
}
