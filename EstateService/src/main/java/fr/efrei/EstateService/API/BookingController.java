package fr.efrei.EstateService.API;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Estate")

public class EstateController {


}



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
