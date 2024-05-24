package fr.efrei.estateservice.api;

import fr.efrei.estateservice.core.EstateEntity;
import fr.efrei.estateservice.service.EstateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class EstateController {
    private final EstateService estateService;
  
    public EstateController(EstateService estateService) {
        this.estateService = estateService;
    }

    @GetMapping
    public List<EstateEntity> allEstates() {
        return estateService.getEstates();
    }

    @GetMapping("/{estateId}")
    public EstateEntity getEstate(@PathVariable String estateId) {
        return estateService.findEstate(estateId);
    }
  
    @PutMapping("/publish/{id}")
    public EstateResponse publishEstate(@PathVariable String id)  {
        var estate = estateService.createEstate(id);
        return estate != null
                ? new EstateResponse(estate)
                : null;
    }
  
    @DeleteMapping("/delete/{id}")
    public void deleteEstate(@PathVariable("id") String id) {
        estateService.deleteEstate(id);
    }
}
