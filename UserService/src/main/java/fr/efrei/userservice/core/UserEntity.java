package fr.efrei.userservice.core;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserEntity {

    @Id
    private String email;
    private String password;

    public UserEntity(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public UserEntity() {
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
