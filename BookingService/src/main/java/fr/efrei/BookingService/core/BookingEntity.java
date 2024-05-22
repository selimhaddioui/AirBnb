package fr.efrei.BookingService.core;

public class BookingEntity {
    private String bookingId;
    private String estateId;
    private String tenantId;
    /* ... */

    public BookingEntity(String bookingId, String estateId, String tenantId/*, ... */) {
        this.bookingId = bookingId;
        this.estateId = estateId;
        this.tenantId = tenantId;
        /* ... */
    }

    public String getBookingId() {
        return bookingId;
    }

    public String getEstateId() {
        return estateId;
    }

    public String getTenantId() {
        return tenantId;
    }
}
