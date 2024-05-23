import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {ServiceResponse} from "../interfaces/service.response";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly usersPath = `${environment.userApiUrl}/users`;

    createUser(email: string, password: string, firstName: string, lastName: string, isLessor: boolean): ServiceResponse {
        if (email === '' || password === '' || firstName === '' || lastName === '') {
            return {success: false, message: 'Please fill in all fields'};
        }
        let user: User = {
            id: '',
            token: undefined,
            firstName: '',
            lastName: '',
            isLessor: false,
            email: '',
            password: ''
        };
        // send put request
        // this.http.put<User>(this.usersPath, { id }).subscribe({
        //   next: (data => {
        //     user = data;
        //   })
        // });
        // return user.id === '' ? undefined : user;
        if (email !== 'success') {
            return {success: false, message: 'Email already used'};
        }
        user = {
            id: '1',
            token: 'defined',
            firstName: firstName,
            lastName: lastName,
            isLessor: isLessor,
            email: email,
            password: password
        }
        this.setUserInSession(user);
        return {success: true, message: 'User created'};
    }

    signIn(email: string, password: string): ServiceResponse {
        if (email === '' || password === '') {
            return {success: false, message: 'Please fill in all fields'};
        }
        let user: User = {
            id: '17',
            token: "mockSignIn",
            firstName: 'selim',
            lastName: 'haddioui',
            isLessor: false,
            email: '',
            password: ''
        };
        // get user from db using both email and password
        // this.http.get<User>(this.usersPath, { email, password }).subscribe({
        //     next: (data => {
        //         user = data;
        //     })
        // });
        if(user.email === 'success') {
            this.setUserInSession(user);
            return {success: true, message: 'User created'};
        }
        return {success: false, message: 'Wrong credentials'};
    }

    setUserInSession(user: User) {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUserInSession(): User {
        return JSON.parse(sessionStorage.getItem('user') || '{}');
    }

    constructor(private http: HttpClient) {
    }

    signOff() {
        // remove user token from db
        sessionStorage.removeItem('user');
    }
}