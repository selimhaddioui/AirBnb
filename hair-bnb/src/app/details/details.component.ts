import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EstateService} from '../services/estate.service';
import {Estate} from '../interfaces/estate';
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
    housingService = inject(EstateService);
    housingLocation: Estate | undefined;
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    constructor() {
        const estateId = this.route.snapshot.params['id'];
        this.housingService.getEstateById(estateId)
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
