import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {ServiceResponse} from "../interfaces/service.response";
import {EstateService} from "../services/estate.service";

@Component({
    selector: 'app-estate-creation',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatButton,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatCheckbox,
        MatButtonToggleGroup,
        MatButtonToggle
    ],
    templateUrl: './estate-creation.component.html',
    styleUrl: './estate-creation.component.sass'
})
export class EstateCreationComponent implements OnInit{
    readonly userService = inject(UserService);
    readonly estateService = inject(EstateService);
    estateCreationForm = new FormGroup({
        name: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
    });
    serviceResponse: ServiceResponse = {success: true, message: ''};


    ngOnInit() {
        let user = this.userService.getUserInSession();
        if(!user || !user.isLessor){
            this.router.navigate(['']);
        }
    }

    constructor(private router: Router) {
    }

    onSubmit() {
        this.estateService.publishEstate(
            this.estateCreationForm.value.name ?? '',
            this.estateCreationForm.value.city ?? '',
            photoUrls[Math.floor(Math.random() * photoUrls.length)],
            this.estateCreationForm.value.state ?? '',
            ).subscribe({
            next: (response: ServiceResponse) => {
                this.serviceResponse = response;
                if (response.success) {
                    this.router.navigate(['']);
                }
            },
            error: (error) => {
                console.error('Unexpected error occurred', error);
                this.serviceResponse.message = 'Unexpected error occurred. Please try again.';
                this.serviceResponse.success = false;
            }
        });
    }
}

const photoUrls = [
    "https://angular.io/assets/images/tutorials/faa/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/r-architecture-GGupkreKwxA-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg",
    "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg"
]
