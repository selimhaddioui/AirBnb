package fr.efrei.BookingService.core;

public class BookingEntity {
    private String bookindId;
    private String estateId;
    private String tenantId;
    /* ... */

    public BookingEntity(String bookingId, String estateId, String tenantId/*, ... */) {
        this.bookindId = bookingId;
        this.estateId = estateId;
        this.tenantId = tenantId;
        /* ... */
    }

    public String getBookindId() {
        return bookindId;
    }

    public String getEstateId() {
        return estateId;
    }

    public String getTenantId() {
        return tenantId;
    }
}
