package fr.efrei.estateservice.service;

import org.springframework.stereotype.Service;

@Service
public class HttpService {

    public boolean isUserAllowed(String userId, String userToken) {
        return true;
    }
}
