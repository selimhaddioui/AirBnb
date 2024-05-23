import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Booking} from "../interfaces/booking";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly bookingsPath = `${environment.bookingApiUrl}/bookings`;

  async getBookings(): Promise<Booking[]> {
    const data = await fetch(this.bookingsPath);
    return await data.json() ?? [];
//     this.http.get<any[]>(environment.bookingApiUrl)
//         .subscribe({
//             next: (data) => {
//                 this.reservations = data;
//             },
//             error: (error) => {
//                 this.errorMessage = 'Failed to load reservations. Please try again.';
//             }
//         });
  }

  async getBookingById(id: number): Promise<Booking | undefined> {
    const data = await fetch(`${this.bookingsPath}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor(private http: HttpClient) { }
}