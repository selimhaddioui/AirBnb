import {Component, inject} from '@angular/core';
import {EstateService} from '../services/estate.service';
import {EstateComponent} from "../estate/estate.component";
import {CommonModule} from "@angular/common";
import {Estate} from "../interfaces/estate";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './estates.component.html',
    styleUrl: './estates.component.css',
    imports: [
        CommonModule,
        EstateComponent,
    ]
})
export class EstatesComponent {
    estates: Estate[] = [];
    housingService: EstateService = inject(EstateService);
    estatesFiltered: Estate[] = []

    constructor() {
        this.housingService.getEstates()
            .then((estates: Estate[]) => {
                this.estates = estates;
                this.estatesFiltered = estates;
            })
    }

    filterResults(text: string) {
        if (!text) {
            this.estatesFiltered = this.estates;
            return;
        }
        this.estatesFiltered = this.estates.filter(estate => estate?.city.toLowerCase().includes(text.toLowerCase()));
    }
}