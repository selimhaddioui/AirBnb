package fr.efrei.BookingService.dao;

import fr.efrei.BookingService.core.BookingEntity;
import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<BookingEntity, String> {

}
