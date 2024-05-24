import {Component, inject} from '@angular/core';
import {EstateService} from '../services/estate.service';
import {EstateComponent} from "../estate/estate.component";
import {CommonModule} from "@angular/common";
import {Estate} from "../interfaces/estate";
import {MatCardTitle} from "@angular/material/card";
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './estates.component.html',
    styleUrl: './estates.component.css',
    imports: [
        CommonModule,
        EstateComponent,
        MatCardTitle,
    ]
})
export class EstatesComponent {
    estateService: EstateService = inject(EstateService);
    userService = inject(UserService);
    user: User = this.userService.getUserInSession();
    estates: Estate[] = [];
    estatesFiltered: Estate[] = []

    constructor() {
        this.estateService.getEstates()
            .then((estates: Estate[]) => {
                return this.user.isLessor ? estates.filter(estate => estate.lessorId === this.user.id) : estates;
            }).then((estates: Estate[]) => {
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