package fr.efrei.estateservice.api;

import fr.efrei.estateservice.service.EstateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EstateController {
    private final EstateService estateService;

    public EstateController(EstateService estateService) {
        this.estateService = estateService;
    }

    @GetMapping
    public String ping() {
        return "Hello on Estate Service" ;
    }

    @GetMapping("/all")
    public List<EstateResponse> getAllEstate() {
        return estateService.getEstates().stream().map(EstateResponse::new).toList();
    }

    @GetMapping("/new/{id}")
    public String createEstate(@PathVariable String id) {
        estateService.createEstate(id);
        return "Go to http://localhost:8082/all to see your new record" ;
    }

    @PutMapping("/publish/{id}")
    public String publishEstate(@PathVariable String id) throws Exception {
        estateService.publishEstate(id);
        return "Go to http://localhost:8082/all to see your updated record" ;
    }

    /*@GetMapping("/delete/{id}")
    public String deleteEstate(@PathVariable String id) {
        estateService.deleteEstate(id);
        return "Go to http://localhost:8082/all to see your new record" ;
    }*/
    @DeleteMapping("/delete/{id}")
    public String deleteFile(@PathVariable("id") String id) {
        estateService.deleteEstate(id);
        return "Estate" + id + "deleted\nGo to http://localhost:8082/all to see your new record";
    }
}
