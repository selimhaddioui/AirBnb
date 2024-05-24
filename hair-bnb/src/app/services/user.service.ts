import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {ServiceResponse} from "../interfaces/service.response";
import {catchError, map, Observable, of} from "rxjs";

interface AuthRequest {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly usersPath = environment.userApiUrl;

    createUser(email: string, password: string, firstName: string, lastName: string, isLessor: boolean): Observable<ServiceResponse> {
        if (email === '' || password === '' || firstName === '' || lastName === '') {
            return of({success: false, message: 'Please fill in all fields'});
        }
        const newUser: Partial<User> = {email, password, firstName, lastName, isLessor};
        return this.http.put<User>(this.usersPath, newUser).pipe(map(user => {
                if (user.id === '-1') {
                    return {success: false, message: 'Email already used'};
                }
                this.setUserInSession(user);
                return {success: true, message: 'User created'};
            }),
            catchError(() => {
                return of({success: false, message: 'An error occurred while creating the user'});
            }));
    }

    signIn(email: string, password: string): Observable<ServiceResponse> {
        if (email === '' || password === '') {
            return of({success: false, message: 'Please fill in all fields'});
        }
        const authBodyRequest: Partial<AuthRequest> = {email, password};
        return this.http.put<User>(`${this.usersPath}/auth`, authBodyRequest).pipe(map(user => {
                if (user.id === '-1') {
                    return {success: false, message: 'Wrong credentials'};
                }
                this.setUserInSession(user);
                return {success: true, message: 'User authenticated'};
            }),
            catchError(() => {
                return of({success: false, message: 'An error occurred while trying to log'});
            }));
    }

    signOff() {
        if (!this.getUserInSession()) {
            return;
        }
        fetch(`${this.usersPath}/logout/${this.getUserInSession().id}`);
        sessionStorage.removeItem('user');
    }

    setUserInSession(user: User) {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUserInSession(): User {
        return JSON.parse(sessionStorage.getItem('user') || '{}');
    }

    constructor(private http: HttpClient) {
    }
}