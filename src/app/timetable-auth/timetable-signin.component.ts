
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TimetableAuthService } from './timetable-auth.service';

import { NgForm } from '@angular/forms'
import { TimetableUser } from './timetable-user.model';
import { Router } from '@angular/router';

//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

//Bring an image to a component is tricy
//Refer https://github.com/AngularClass/angular2-webpack-starter/commit/d9ea3fb4b57a6d7c320900b83a76e388546b56c6

@Component({
  selector: 'timetable-signin',
  moduleId: module.id,
  templateUrl: './timetable-signin.component.html',
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
export class TimetableSigninComponent  { 

  constructor(private timetableAuthService: TimetableAuthService,
              private router: Router) {}

  isUserLoggedIn = this.timetableAuthService.isUserLoggedIn(); 

    onSubmit(form: NgForm) {
    const timetableUser = new TimetableUser(form.value.email, form.value.password);
    this.timetableAuthService.signinTimetableUser(timetableUser).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.router.navigateByUrl('timetable');
      },
      error => console.error(error)
    );
    form.resetForm();
    
  } 

}
