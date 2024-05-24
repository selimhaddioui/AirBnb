package fr.efrei.estateservice.api;

import fr.efrei.estateservice.core.EstateEntity;
import fr.efrei.estateservice.service.EstateService;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Stream;

@RestController
@RequestMapping("/estates")
public class EstateController {
    private final EstateService estateService;
  
    public EstateController(EstateService estateService) {
        this.estateService = estateService;
    }

    @GetMapping
    public Stream<EstateResponse> allEstates() {
        return estateService.getEstates().stream().map(EstateResponse::new);
    }

    @GetMapping("/{estateId}")
    public EstateEntity getEstate(@PathVariable String estateId) {
        return estateService.findEstate(estateId);
    }
  
    @PutMapping
    public EstateResponse publishEstate(@RequestBody PublishRequest publishRequest)  {
        var estate = estateService.createEstate(publishRequest.userId(), publishRequest.userToken(), publishRequest.name(), publishRequest.city(), publishRequest.photo(), publishRequest.state());
        return estate != null
                ? new EstateResponse(estate)
                : new EstateResponse("-1", "-1", null, null, null, null);
    }
  
    @DeleteMapping("/{estateId}")
    public void deleteEstate(@RequestBody DeleteEstateRequest deleteEstateRequest, @PathVariable String estateId) {
        estateService.deleteEstate(deleteEstateRequest.userId(), deleteEstateRequest.userToken(), estateId);
    }
}
