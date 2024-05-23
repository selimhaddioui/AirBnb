import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estate } from '../interfaces/estate';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatButton],
  templateUrl: 'estate.component.html',
  styleUrl: './estate.component.css'
})
export class EstateComponent {
  @Input() estate!: Estate;
}
