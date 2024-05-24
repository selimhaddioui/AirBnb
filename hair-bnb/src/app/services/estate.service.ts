import {inject, Injectable} from '@angular/core';
import {Estate} from "../interfaces/estate";
import {environment} from "../../environments/environment";
import {catchError, map, Observable, of} from "rxjs";
import {ServiceResponse} from "../interfaces/service.response";
import {User} from "../interfaces/user";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";

interface PublishEstateRequest {
    userId: string;
    userToken: string;
    name: string;
    city: string;
    photo: string;
    state: string;
}

@Injectable({
    providedIn: 'root'
})
export class EstateService {
    private readonly estatesApiUrl = `${environment.estateApiUrl}`;

    async getEstates(): Promise<Estate[]> {
        const data = await fetch(this.estatesApiUrl);
        return await data.json() ?? [];
    }

    deleteEstate(id: string) : Observable<ServiceResponse> {
        let user = this.userService.getUserInSession();
        if (!user) {
            return of({success: false, message: 'You need to choose an estate to delete'});
        }

        return this.http.delete(`${this.estatesApiUrl}/${id}`, {body: {userId: user.id, userToken: user.token}})
            .pipe(map(result => {
                return {success: true, message: 'Estate deleted'};
            }));
    }

    publishEstate(name: string, city: string, photo: string, state: string): Observable<ServiceResponse> {
        if (name === '' || city === '' || photo === '' || state === '') {
            return of({success: false, message: 'Please fill in all fields'});
        }
        let user = this.userService.getUserInSession();
        if (!user) {
          return of({success: false, message: 'Please log in to publish an estate'});
        }
        const publishEstateRequest: Partial<PublishEstateRequest> = {userId:user.id, userToken:user.token, name, city, photo, state};

        return this.http.put<Estate>(`${this.estatesApiUrl}`, publishEstateRequest).pipe(map(estate => {
                if (estate.estateId === '-1') {
                    return {success: false, message: 'Failed to create estate'};
                }
                return {success: true, message: 'Estate created'};
            }),
            catchError(() => {
                return of({success: false, message: 'An error occurred while trying to create the estate'});
            }));
    }

    constructor(private userService: UserService, private http: HttpClient) {
    }
}
