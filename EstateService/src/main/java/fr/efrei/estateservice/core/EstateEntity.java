package fr.efrei.estateservice.core;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EstateEntity {

    @Id
    private String id;
    private String address;
    private int numberOfRooms;
    private int price;


    private boolean isPublished;

    public EstateEntity(String id) {
        this.id = id;
    }

    public void setPublished(boolean published) {
        isPublished = published;
    }

    public EstateEntity() {
    }

    public String getId() {
        return id;
    }

}