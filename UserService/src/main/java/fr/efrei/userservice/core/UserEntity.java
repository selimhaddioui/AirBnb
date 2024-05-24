package fr.efrei.userservice.core;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
public class UserEntity {
    @Id
    private String id;
    private String token;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private boolean isLessor;

    public UserEntity(String id, String email, String password, String firstName, String lastName, boolean isLessor) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isLessor = isLessor;
    }

    public UserEntity() {
    }

    public String getId() {
        return id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public boolean isPasswordCorrect(PasswordEncoder passwordEncoder, String rawPassword) {
        return passwordEncoder.matches(rawPassword, password);
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public boolean isLessor() {
        return isLessor;
    }
}
