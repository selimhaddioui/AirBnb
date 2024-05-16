package fr.efrei.BookingService.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
/*
    * Pour essayer ce code, vous pouvez utiliser le lien suivant:
    * http://localhost:8080/booking
    * http://localhost:8080/booking/TestRecord
    * http://localhost:8080/booking/Message/ToutCeQueVousVoulez
*/
public class BookingController {

    @GetMapping
    public String getBookings() {
        return "Booking";
    }

    @GetMapping("/Message/{bookingId}")
    public String getBooking(@PathVariable String bookingId) {
        return "Booking " + bookingId;
    }

    @GetMapping("/TestRecord")
    public BookingRecord testRecord() {
        return new BookingRecord("monIdDeProprio", "monIdDeLocataire");
    }
}
