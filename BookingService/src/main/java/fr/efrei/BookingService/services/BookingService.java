package fr.efrei.BookingService.services;

import fr.efrei.BookingService.core.BookingEntity;
import fr.efrei.BookingService.dao.BookingRepository;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

@Service
public class BookingService {
    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder().withoutPadding();
    private final BookingRepository bookingRepository;
    private final HttpService httpService;

    public BookingService(BookingRepository bookingRepository, HttpService httpService) {
        this.httpService = httpService;
        this.bookingRepository = bookingRepository;
    }

    public BookingEntity book(String estateId, String tenantId, String tenantToken, String bookingStart, String bookingEnd, String apartmentTitle) {
        if(!httpService.isEstateAvailable(estateId, bookingStart, bookingEnd)){
            return null;
        }
        if(!httpService.isTenantTokenValid(tenantId, tenantToken)){
            return null;
        }
        String bookingId = generateToken();
        return bookingRepository.save(new BookingEntity(bookingId, estateId, tenantId, bookingStart, bookingEnd, apartmentTitle));
    }

    public void cancel(String bookingId) {
        if(bookingRepository.findById(bookingId).isPresent()){
            bookingRepository.deleteById(bookingId);
        }
    }

    public List<BookingEntity> getBookings(){
        return (List<BookingEntity>) bookingRepository.findAll();
    }

    public BookingEntity getBooking(String bookingId){
        return bookingRepository.findById(bookingId).orElse(null);
    }

    private String generateToken() {
        byte[] randomBytes = new byte[24];
        secureRandom.nextBytes(randomBytes);
        return base64Encoder.encodeToString(randomBytes);
    }
}
