import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {SignupDialogTriggerComponent} from "./authentication/signup/signup-dialog-trigger/signup-dialog-trigger.component";
import {LoginDialogTriggerComponent} from "./authentication/login/login-dialog-trigger/login-dialog-trigger.component";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatTooltip} from "@angular/material/tooltip";
import {User} from "./interfaces/user";
import {UserService} from "./services/user.service";
import {MatCardTitle} from "@angular/material/card";

const iconBaseUrl = '/assets/';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [
        RouterOutlet,
        RouterLink,
        MatButtonModule,
        NgOptimizedImage,
        LoginDialogTriggerComponent,
        SignupDialogTriggerComponent,
        MatIcon,
        MatTooltip,
        MatCardTitle
    ]
})
export class AppComponent {
    title = 'hair-bnb';
    userService = inject(UserService);
    user: User = this.userService.getUserInSession();
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('plus-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'filling_system.svg'));
        iconRegistry.addSvgIcon('estates-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'estates.svg'));
        iconRegistry.addSvgIcon('rents-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'rents.svg'));
        iconRegistry.addSvgIcon('logout-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'logout.svg'));
    }

    signOff() {
        this.userService.signOff();
        window.location.reload();
        alert('You have been signed off');
    }
}
