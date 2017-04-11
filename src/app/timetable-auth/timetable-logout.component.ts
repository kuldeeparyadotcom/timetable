
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { TimetableAuthService } from './timetable-auth.service';

import { NgForm } from '@angular/forms'
import { TimetableUser } from './timetable-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'timetable-logout',
  moduleId: module.id,
  templateUrl: './timetable-logout.component.html',
  styles: [`
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
  `]
})
export class TimetableLogoutComponent implements OnInit { 

  constructor(private timetableAuthService: TimetableAuthService,
              private router: Router) {}

  isUserLoggedIn = this.timetableAuthService.isUserLoggedIn(); 

    onSubmit(form: NgForm) {
      this.timetableAuthService.logoutTimetableUser();
      this.isUserLoggedIn = this.timetableAuthService.isUserLoggedIn(); 
      this.router.navigateByUrl('signin');

  }
  ngOnInit() {
    this.isUserLoggedIn = this.timetableAuthService.isUserLoggedIn(); 
  }
}
