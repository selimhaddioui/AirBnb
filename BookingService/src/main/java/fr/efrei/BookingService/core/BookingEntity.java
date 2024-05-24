package fr.efrei.BookingService.core;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BookingEntity {
    @Id
    private String bookingId;
    private String estateId;
    private String tenantId;
    private String bookingStart;
    private String bookingEnd;
    private String apartmentTitle;


    public BookingEntity(String bookingId, String estateId, String tenantId, String bookingStart, String bookingEnd, String apartmentTitle) {
        this.bookingId = bookingId;
        this.estateId = estateId;
        this.tenantId = tenantId;
        this.bookingStart = bookingStart;
        this.bookingEnd = bookingEnd;
        this.apartmentTitle = apartmentTitle;
    }

    public BookingEntity() {

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
    public String getApartmentTitle() {return bookingEnd;}
}
