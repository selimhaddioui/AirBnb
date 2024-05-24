package fr.efrei.BookingService.api;

import fr.efrei.BookingService.services.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping
    public List<BookingResponse> getBookings() {
        return bookingService.getBookings().stream().map(BookingResponse::new).toList();
    }

    @GetMapping("/{bookingId}")
    public BookingResponse getBooking(@PathVariable String bookingId) {
        var booking = bookingService.getBooking(bookingId);
        return booking != null
                ? new BookingResponse(booking)
                : new BookingResponse("-1", null, null, null, null, null);

    }

    @DeleteMapping("/{bookingId}")
    public void cancel(@PathVariable String bookingId){
        bookingService.cancel(bookingId);
    }

    @PutMapping
    public BookingResponse book(@RequestBody BookingRequest bookingRequest){
        var booking = bookingService.book(
                bookingRequest.estateId(),
                bookingRequest.tenantId(),
                bookingRequest.tenantToken(),
                bookingRequest.bookingStart(),
                bookingRequest.bookingEnd(),
                bookingRequest.apartmentTitle()
        );
        return booking != null
                ? new BookingResponse(booking)
                : new BookingResponse("-1", null, null, null, null, null);
    }
}
