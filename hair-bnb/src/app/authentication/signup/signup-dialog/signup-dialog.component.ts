import {Component, inject} from '@angular/core';
import {
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {UserService} from "../../../services/user.service";
import {ServiceResponse} from "../../../interfaces/service.response";

@Component({
    selector: 'app-signup-dialog',
    templateUrl: 'signup-dialog.component.html',
    styleUrl: './signup-dialog.component.css',
    standalone: true,
    imports: [
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
        MatButtonToggle,
        ReactiveFormsModule,
    ],
})
export class SignupDialogComponent {
    userService = inject(UserService);
    serviceResponse: ServiceResponse = {success: true, message: ''};

    userCreationForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        isLessor: new FormControl(false),
    });

    constructor() {}

    createUser() {
        this.userService.createUser(
            this.userCreationForm.value.email ?? '',
            this.userCreationForm.value.password ?? '',
            this.userCreationForm.value.firstName ?? '',
            this.userCreationForm.value.lastName ?? '',
            this.userCreationForm.value.isLessor ?? false
        ).subscribe({
            next: (response: ServiceResponse) => {
                this.serviceResponse = response;
                if (response.success) {
                    window.location.reload();
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