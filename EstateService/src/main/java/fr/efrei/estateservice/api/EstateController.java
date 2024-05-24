package fr.efrei.EstateService.API;

import fr.efrei.estateservice.core.EstateEntity;
import fr.efrei.estateservice.dao.EstateRepository;
import fr.efrei.estateservice.service.EstateService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping


public class EstateController {

    private final EstateService estateService;
    public EstateController(EstateService estateService) {
        this.estateService = estateService;
    }

    @GetMapping
    public List<EstateEntity> AllEstate() {
        return estateService.getEstates();
    }

    @GetMapping
    public String publishEstate() {
        return "coucou";
    }


    @GetMapping("/Message/{estateId}")
    public EstateEntity getEstate(@PathVariable String estateId) {
        return estateService.findEstate(estateId);
    }

    @GetMapping("/TestRecord")
    public EstateRecord testRecord() {
        return new EstateRecord("monIdDeProprio", "monIdDeLocataire");
    }
}
