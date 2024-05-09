import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVrpMCfp4uu0JY3c06HIJgQHvbnnkkwg8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(errorResponse => {
                let errorMessage = 'An unknown error ocurred!';
                if (!errorResponse.error || !errorResponse.error.error) {
                    return throwError(errorMessage);
                }
                switch (errorResponse.error.error.message) {
                    case 'EMAIL_EXISTS':
                        errorMessage = 'This email exists already'
                }
                return throwError(errorMessage);
            }));
    }
}