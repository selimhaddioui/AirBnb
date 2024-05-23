import {Component, inject} from '@angular/core';
import {EstateComponent} from "../estate/estate.component";
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {Booking} from "../interfaces/booking";
import {BookingService} from "../services/booking.service";
import {MatList, MatListItem} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import {RentComponent} from "../rent/rent.component";



@Component({
  selector: 'app-rents',
  standalone: true,
    imports: [
        EstateComponent,
        NgForOf,
        MatList,
        MatListItem,
        MatLine,
        CurrencyPipe,
        DatePipe,
        RentComponent,
        NgIf
    ],
  templateUrl: './rents.component.html',
  styleUrl: './rents.component.sass'
})
export class RentsComponent {
    bookings: Booking[] = [];
    bookingService: BookingService = inject(BookingService);

    constructor() {
        this.bookingService.getBookings()
            .then((bookingList: Booking[]) => {
                this.bookings = bookingList;
            })
    }
}
