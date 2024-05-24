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


    public EstateEntity(String id) {
        this.id = id;
    }

    public EstateEntity() {
    }

    public String getId() {
        return id;
    }

}
