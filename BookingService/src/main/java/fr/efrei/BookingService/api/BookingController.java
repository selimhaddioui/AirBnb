package fr.efrei.BookingService.api;

import fr.efrei.BookingService.services.BookingService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
/* 8081 */

public class BookingController {

    private BookingService bookingService;

    public BookingController() {
        this.bookingService = new BookingService();
    }

    @GetMapping
    public String getBookings() {
        return "Get available bookings";
    }

    @GetMapping("/Message/{bookingId}")
    public String getBooking(@PathVariable String bookingId) {
        return "Booking" + bookingId;
    }

    @GetMapping("/TestRecord")
    public BookingResponse testRecord() {
        return new BookingResponse("monIdDeProprio", "monIdDeLocataire", "monIdDeTenant", "debutResa", "finResa");
    }
    @GetMapping("/Cancel/{bookingId}")
    public void cancel(@PathVariable String bookingId){
        bookingService.cancel(bookingId);
    }

    @GetMapping("/Book/{bookingId}")
    public BookingResponse book (String bookingId, String estateId, String tenantId, String bookingStart, String bookingEnd){
        //BookingResponse reponse = new BookingResponse(bookingId, estateId, tenantId, bookingStart, bookingEnd);
        bookingService.book(bookingId, estateId, tenantId, bookingStart, bookingEnd);
    }
}
