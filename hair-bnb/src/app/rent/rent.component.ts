import {Component, Input} from '@angular/core';
import {Estate} from "../interfaces/estate";
import {Booking} from "../interfaces/booking";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {MatLine} from "@angular/material/core";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatLine,
    MatListItem,
    NgForOf,
    MatIcon,
    MatActionList,
    MatButton
  ],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.sass'
})
export class RentComponent {
  @Input() booking!: Booking;
}
