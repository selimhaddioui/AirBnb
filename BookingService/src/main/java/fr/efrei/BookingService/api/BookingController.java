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

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public void getBookings() {
        bookingService.getBookings();
    }

    @GetMapping("/Message/{bookingId}")
    public void getBooking(@PathVariable String bookingId) {
        bookingService.getBooking(bookingId);
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
    public void book(@PathVariable String bookingId, String estateId, String tenantId, String bookingStart, String bookingEnd){
        bookingService.book(bookingId, estateId, tenantId, bookingStart, bookingEnd);
    }
}
