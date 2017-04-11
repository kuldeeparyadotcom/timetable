import { TimetableUser } from "./timetable-user.model";
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';

@Injectable()
export class TimetableAuthService {
    
    constructor(private http: Http,
                private router: Router) {}


    isUserLoggedIn() {
        if(!localStorage.getItem('token')) {
            return false
        }
        return true
    }

    signupTimetableUser(timetableUser: TimetableUser) {
        // console.log(timetableUser);
     
        const body = JSON.stringify(timetableUser);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post('http://localhost:7018/users/signup', body, {headers: headers})
        .map((response: Response) => {
            const result = response.json();
            return result;
        })
        .catch((error: Response) => Observable.throw(error.json()));
        
    }


    signinTimetableUser(timetableUser: TimetableUser) {
        // console.log(timetableUser);
     
        const body = JSON.stringify(timetableUser);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post('http://localhost:7018/users/signin', body, {headers: headers})
        .map((response: Response) => {
            const result = response.json();
            return result;
        })
        .catch((error: Response) => Observable.throw(error.json()));
        
    }

    logoutTimetableUser() {
        localStorage.clear();
    }

}