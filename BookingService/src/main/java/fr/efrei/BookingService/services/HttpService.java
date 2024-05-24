package fr.efrei.BookingService.services;

import org.springframework.stereotype.Service;

@Service
public class HttpService {

    public boolean isEstateAvailable(String estateId, String bookingStart, String bookingEnd) {
        return true;
    }

    public boolean isTenantTokenValid(String tenantId, String tenantToken) {
        return true;
    }
}
