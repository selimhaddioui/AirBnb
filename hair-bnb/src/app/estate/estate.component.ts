import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estate } from '../interfaces/estate';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton } from "@angular/material/button";
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";

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
  user: User = this.userService.getUserInSession();
}
