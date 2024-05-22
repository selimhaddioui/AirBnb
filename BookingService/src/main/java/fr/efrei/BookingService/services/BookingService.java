package fr.efrei.BookingService.services;

import fr.efrei.BookingService.core.BookingEntity;
import fr.efrei.BookingService.dao.BookingDAO;

public class BookingService {

    private BookingDAO dao;

    public BookingEntity book(String estateId, String tenantId) {

        return new BookingEntity("bookingId", estateId, tenantId);
    }

    public void cancel(String bookingId) {
        /* Check for existence */
        /* Delete the booking from DAO */
    }
}
