package fr.efrei.estateservice.api;

import fr.efrei.estateservice.core.EstateEntity;

public record EstateResponse(String estateId, String lessorId, String name, String city, String photo, String state) {
    public EstateResponse(EstateEntity estateEntity) {
        this(estateEntity.getId(), estateEntity.getLessorId(), estateEntity.getName(), estateEntity.getCity(), estateEntity.getPhoto(), estateEntity.getState());
    }
}
