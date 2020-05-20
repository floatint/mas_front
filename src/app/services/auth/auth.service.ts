import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private isSignedIn$ = new BehaviorSubject(false);
    private userInfo;
    private userToken: string;

    constructor () {}
    
    public get isLoggedIn(): boolean {
        return this.isSignedIn$.getValue();
    }

    public signIn(email: string, password: string) {
        let tmpUserToken = window.btoa(email + ':' + password);
        if ((email == 'test@mail.ru') && (password == ' ')) {
            this.isSignedIn$.next(true);
        }
    }

    public signOut() {
        this.isSignedIn$.next(false);
    }
}