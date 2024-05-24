import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estate } from '../interfaces/estate';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton } from "@angular/material/button";
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";
import {EstateService} from "../services/estate.service";
import {ServiceResponse} from "../interfaces/service.response";

@Component({
  selector: 'app-estate',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatButton],
  templateUrl: 'estate.component.html',
  styleUrl: './estate.component.css'
})
export class EstateComponent {
  @Input() estate!: Estate;
  userService = inject(UserService);
  estateService = inject(EstateService);
  serviceResponse: ServiceResponse = {success: true, message: ''};
  user: User = this.userService.getUserInSession();

  onSubmit() {
    this.estateService.deleteEstate(this.estate.estateId).subscribe({
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
  };
}
