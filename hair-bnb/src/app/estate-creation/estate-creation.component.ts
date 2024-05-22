import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

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
export class EstateCreationComponent {
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    constructor() {
    }

    onSubmit() {
        if (this.applyForm.valid) {
            const apartmentData = this.applyForm.value;
            // Logic to save the apartment data
            console.log(apartmentData);
        }
    }
}
