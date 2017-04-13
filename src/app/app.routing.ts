import { Routes, RouterModule} from '@angular/router';

import { TimetableItemsTipsComponent } from './timetable-items-tips/timetable-items-tips.component'
import { TimetableWisheslistComponent } from './timetable-wish/timetable-wisheslist.component'
import { TimetableSignupComponent } from './timetable-auth/timetable-signup.component'
import { TimetableSigninComponent } from './timetable-auth/timetable-signin.component'
import { TimetableLogoutComponent } from './timetable-auth/timetable-logout.component'
import { TimetableAuthComponent } from './timetable-auth/timetable-auth.component'
import { AUTH_ROUTES } from './timetable-auth/timetable-auth.routing'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    // { path: 'signup', component: TimetableSignupComponent },
    // { path: 'signin', component: TimetableSigninComponent },
    // { path: 'logout', component: TimetableLogoutComponent },
    { path: 'timetable', component: TimetableItemsTipsComponent },
    { path: 'wishes', component: TimetableWisheslistComponent },
    { path: 'auth', component: TimetableAuthComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);