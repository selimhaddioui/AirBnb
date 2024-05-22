package fr.efrei.estateservice.core;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EstateEntity {

    @Id
    private String id;

    public EstateEntity(String id) {
        this.id = id;
    }

    public EstateEntity() {
    }

    public String getId() {
        return id;
    }

}
