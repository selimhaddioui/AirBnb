import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {
    MatDialog,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent, MatDialogTitle
} from '@angular/material/dialog';
import {SignupDialogComponent} from "../signup-dialog/signup-dialog.component";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
    selector: 'app-signup-dialog-trigger',
    standalone: true,
    templateUrl: './signup-dialog-trigger.component.html',
    styleUrl: './signup-dialog-trigger.component.sass',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogClose,
        MatDialogActions,
        MatDialogContent,
        MatDialogTitle,
        MatIcon,
        MatTooltip
    ],
})
export class SignupDialogTriggerComponent {
    animal!: string;
    name!: string;

    constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('sign-up-icon', sanitizer.bypassSecurityTrustResourceUrl('/assets/register.svg'));
    }

    openSignUpDialog(): void {
        const dialogRef = this.dialog.open(SignupDialogComponent, {
            data: {name: this.name, animal: this.animal},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
