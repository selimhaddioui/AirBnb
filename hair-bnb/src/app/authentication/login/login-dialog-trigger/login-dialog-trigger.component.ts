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
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-login-dialog-trigger',
    standalone: true,
    templateUrl: './login-dialog-trigger.component.html',
    styleUrl: './login-dialog-trigger.component.sass',
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
export class LoginDialogTriggerComponent {
    animal!: string;
    name!: string;

    constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('sign-in-icon', sanitizer.bypassSecurityTrustResourceUrl('/assets/unlock.svg'));
    }

    openSignInDialog(): void {
        const dialogRef = this.dialog.open(LoginDialogComponent, {
            data: {name: this.name, animal: this.animal},
        });

        dialogRef.afterClosed().subscribe(result => {
            this.animal = result;
        });
    }
}
