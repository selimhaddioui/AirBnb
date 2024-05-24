import {Component, inject, Inject} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {User} from "../../../interfaces/user";
import {UserService} from "../../../services/user.service";
import {ServiceResponse} from "../../../interfaces/service.response";

@Component({
    selector: 'app-login-dialog',
    templateUrl: 'login-dialog.component.html',
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
        ReactiveFormsModule,
    ],
})
export class LoginDialogComponent {
    userService = inject(UserService);
    serviceResponse: ServiceResponse = {success: true, message: ''};

    userLoginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(@Inject(MAT_DIALOG_DATA) public user: User) {
    }

    logUser() {
        console.log("we there");
        this.userService.signIn(
            this.userLoginForm.value.email ?? '',
            this.userLoginForm.value.password ?? ''
        ).subscribe({
            next: (response: ServiceResponse) => {
                this.serviceResponse = response;
                if (response.success) {
                    window.location.reload();
                } else {
                    console.error('User creation failed');
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