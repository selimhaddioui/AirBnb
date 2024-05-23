import {Component, inject, Inject} from '@angular/core';
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
        MatTooltip
    ]
})
export class AppComponent {
    userService = inject(UserService);
    title = 'hair-bnb';
    user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('plus-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'filling_system.svg'));
        iconRegistry.addSvgIcon('estates-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'estates.svg'));
        iconRegistry.addSvgIcon('rents-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'rents.svg'));
        iconRegistry.addSvgIcon('logout-icon', sanitizer.bypassSecurityTrustResourceUrl(iconBaseUrl + 'logout.svg'));
    }

    protected readonly sessionStorage = sessionStorage;

    signOff() {
        this.userService.signOff();
        window.location.reload();
        alert('You have been signed off');
    }
}
