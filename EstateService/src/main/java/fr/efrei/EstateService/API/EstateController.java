package fr.efrei.EstateService.API;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping

public class EstateController {
    @GetMapping
    public String publishEstate() {
        return "coucou";
    }

    @GetMapping("/Message/{estateId}")
    public String getEstate(@PathVariable String EstateId) {
        return "Booking " + EstateId;
    }

    @GetMapping("/TestRecord")
    public EstateRecord testRecord() {
        return new EstateRecord("monIdDeProprio", "monIdDeLocataire");
    }
}
