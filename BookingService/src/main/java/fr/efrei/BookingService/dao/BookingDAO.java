package fr.efrei.BookingService.dao;

import fr.efrei.BookingService.core.BookingEntity;

public class BookingDAO {
    public BookingEntity createBooking(String estateId, String tenantId) {
        /* Create a booking in database */
        return new BookingEntity("bookingId", estateId, tenantId);
    }

    public void deleteBooking(String bookingId) {
        /* Delete a booking */
    }
}
