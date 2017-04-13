import { Routes } from '@angular/router';

import { TimetableSignupComponent } from './timetable-signup.component'
import { TimetableSigninComponent } from './timetable-signin.component'
import { TimetableLogoutComponent } from './timetable-logout.component'

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: TimetableSignupComponent },
    { path: 'signin', component: TimetableSigninComponent },
    { path: 'logout', component: TimetableLogoutComponent }
];

