import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housinglocation';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [
        ReactiveFormsModule,
    ]
})
export class DetailsComponent {

    route: ActivatedRoute = inject(ActivatedRoute);
    housingService = inject(HousingService);
    housingLocation: HousingLocation | undefined;
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    constructor() {
        const housingLocationId = Number(this.route.snapshot.params['id']);
        this.housingService.getHousingLocationById(housingLocationId)
            .then((housingLocation) => {
                this.housingLocation = housingLocation;
            });
    }

    submitApplication() {
        this.housingService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? ''
        );
    }
}
