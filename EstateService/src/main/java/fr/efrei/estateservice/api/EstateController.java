package fr.efrei.estateservice.api;

import fr.efrei.estateservice.core.EstateEntity;
import fr.efrei.estateservice.dao.EstateRepository;
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
    public List<EstateEntity> AllEstate() {
        return estateService.getEstates();
    }

    @GetMapping("/{estateId}")
    public EstateEntity getEstate(@PathVariable String estateId) {
        return estateService.findEstate(estateId);
    }
  
    @PutMapping("/publish/{id}")
    public String publishEstate(@PathVariable String id) throws Exception {
        estateService.publishEstate(id);
        return "Go to http://localhost:8082/all to see your updated record" ;
    }
  
    @DeleteMapping("/delete/{id}")
    public String deleteEstate(@PathVariable("id") String id) {
        estateService.deleteEstate(id);
        return "Estate" + id + "deleted\nGo to http://localhost:8082/all to see your new record";
    }
}
