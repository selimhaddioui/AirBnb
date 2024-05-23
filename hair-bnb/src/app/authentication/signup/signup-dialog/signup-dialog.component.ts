import {Component, Inject, inject} from '@angular/core';
import {
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {User} from "../../../interfaces/user";
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
    private readonly userDefault: User = {
        id: '',
        token: undefined,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isLessor: false
    }
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        isLessor: new FormControl(false),
    });

    constructor(
        public dialogRef: MatDialogRef<SignupDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public user: User,
    ) {
    }

    submitApplication() {
        this.serviceResponse = this.userService.createUser(
            this.applyForm.value.email ?? this.userDefault.email,
            this.applyForm.value.password ?? this.userDefault.password,
            this.applyForm.value.firstName ?? this.userDefault.firstName,
            this.applyForm.value.lastName ?? this.userDefault.lastName,
            this.applyForm.value.isLessor ?? this.userDefault.isLessor
        );
        if(this.serviceResponse.success) {
            window.location.reload();
            alert(this.serviceResponse.message);
        }
        // this.userToken = this.userService.createUser(this.user.id);
    }
}