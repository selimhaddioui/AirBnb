package fr.efrei.BookingService.core;

public class BookingEntity {
    private String bookingId;
    private String estateId;
    private String tenantId;
    private String bookingStart;
    private String bookingEnd;


    public BookingEntity(String bookingId, String estateId, String tenantId, String bookingStart, String bookingEnd) {
        this.bookingId = bookingId;
        this.estateId = estateId;
        this.tenantId = tenantId;
        this.bookingStart = bookingStart;
        this.bookingEnd = bookingEnd;
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

    public String getBookingStart() {return bookingStart;}
    public String getBookingEnd() {return bookingEnd;}
}
