package fr.efrei.estateservice.core;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EstateEntity {
    @Id
    private String id;
    private String lessorId;
    private String name;
    private String city;
    private String photo;
    private String state;

    public EstateEntity(String id, String lessorId, String name, String city, String photo, String state) {
        this.id = id;
        this.lessorId = lessorId;
        this.name = name;
        this.city = city;
        this.photo = photo;
        this.state = state;
    }

    public EstateEntity() {
    }

    public String getId() {
        return id;
    }

    public String getLessorId() {
        return lessorId;
    }

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public String getPhoto() {
        return photo;
    }

    public String getState() {
        return state;
    }
}
