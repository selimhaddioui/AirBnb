package fr.efrei.estateservice.dao;

import fr.efrei.estateservice.core.EstateEntity;
import org.springframework.data.repository.CrudRepository;

public interface EstateRepository extends CrudRepository<EstateEntity, String> {
}
