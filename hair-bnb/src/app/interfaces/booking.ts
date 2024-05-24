export interface Booking {
    bookingId: number;
    tenantId: string;
    lessorId: string;
    apartmentTitle: string;
    startDate: Date;
    endDate: Date;
    location: string;
    price: number;
}