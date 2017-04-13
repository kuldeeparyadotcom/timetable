
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TimetableAuthService } from './timetable-auth.service';

import { NgForm } from '@angular/forms'
import { TimetableUser } from './timetable-user.model';

import { Router } from '@angular/router';

@Component({
  selector: 'timetable-signup',
  moduleId: module.id,
  templateUrl: './timetable-signup.component.html',
  styles: [`
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signup {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signup .form-signup-heading,
.form-signup .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signup .form-control {
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
.form-signup input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signup input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-signup input[type="firstname"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signup input[type="lastname"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
  `]
})
export class TimetableSignupComponent  { 

  constructor(private timetableAuthService: TimetableAuthService,
            private router: Router) {}

  isUserLoggedIn = this.timetableAuthService.isUserLoggedIn();

  onSubmit(form: NgForm) {
  //   alert("Save button clicked" + 
  //   form.value.firstname + 
  //   form.value.lastname +
  //   form.value.email +
  //   form.value.password
  //   );
    const timetableUser = new TimetableUser(form.value.email, form.value.password, form.value.firstname, form.value.lastname);
    this.timetableAuthService.signupTimetableUser(timetableUser).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/auth/signin');
        },
      error => console.error(error)
    );

    form.resetForm();
  }
  
}
