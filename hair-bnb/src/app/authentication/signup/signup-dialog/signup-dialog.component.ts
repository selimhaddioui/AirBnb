import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SignupDialogData} from "../signup-dialog-data";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

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
  ],
})
export class SignupDialogComponent {
  constructor(
      public dialogRef: MatDialogRef<SignupDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: SignupDialogData,
  ) {}
}