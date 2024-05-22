package fr.efrei.BookingService.services;

import fr.efrei.BookingService.core.BookingEntity;
import fr.efrei.BookingService.dao.BookingDAO;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookingService {

    private final BookingDAO dao;
    public BookingService(BookingDAO dao) {
        this.dao = dao;
    }

    public void book(String bookingId, String estateId, String tenantId) {
        dao.save(new BookingEntity(bookingId, estateId, tenantId));
    }

    public void cancel(String bookingId) {
        if(dao.findById(bookingId).isPresent()){
            dao.deleteById(bookingId);
        }
    }

    public List<BookingEntity> getBookings(){
        return (List<BookingEntity>) dao.findAll();
    }
}
