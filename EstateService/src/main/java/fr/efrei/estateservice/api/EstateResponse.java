package fr.efrei.estateservice.api;

import fr.efrei.estateservice.core.EstateEntity;

public record EstateResponse(String id) {
    public EstateResponse(EstateEntity estateEntity) {
        this(estateEntity.getId());
    }
}
