export interface Booking {
    bookingId: number;
    estateId: string;
    lessorId: string;
    startDate: Date;
    endDate: Date;
    apartmentTitle: string;
    location: string;
}