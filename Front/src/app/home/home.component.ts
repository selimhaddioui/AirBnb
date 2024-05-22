import {Component, inject} from '@angular/core';
import {HousingService} from '../housing.service';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housinglocation";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HousingLocationComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HousingLocation[] = []

    constructor() {
        this.housingService.getAllHousingLocations()
            .then((housingLocationList: HousingLocation[]) => {
                this.housingLocationList = housingLocationList;
                this.filteredLocationList = housingLocationList;
            })
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }
        this.filteredLocationList = this.housingLocationList.filter(
            location => location?.city.toLowerCase().includes(text.toLowerCase())
        );
    }
}