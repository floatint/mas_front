import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { User } from 'src/app/entities/user';
import { AppConstants} from 'src/app/app.constants';

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor (private http: HttpClient,
                 private appConsts: AppConstants) {}
    
    //TODO: не совсем верна логика работы в компоненте header при выходе
    public get isSignedIn(): boolean {
        return window.localStorage.getItem(this.appConsts.USER_TOKEN) != null;
    }

    public get userModel() : User {
        return JSON.parse(window.localStorage.getItem(this.appConsts.USER_MODEL));
    }

    public signIn(email: string, password: string) {
        let tmpUserToken = window.btoa(email + ':' + password);
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + tmpUserToken
            })
          };
        return this.http.post<User>(environment.baseApiUrl + '/auth/sign-in', null, httpOptions);
    }

    public signUp(name: string, email: string, password: string): Observable<User> {
        return this.http.post<User>(environment.baseApiUrl + '/auth/sign-up', {name: name, email: email, password: password});
    }

    public signOut() {
        window.localStorage.removeItem(this.appConsts.USER_MODEL);
        window.localStorage.removeItem(this.appConsts.USER_TOKEN);
    }
}