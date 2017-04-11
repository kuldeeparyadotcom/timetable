import { Routes, RouterModule} from '@angular/router';

import { TimetableItemsTipsComponent } from './timetable-items-tips/timetable-items-tips.component'
import { TimetableWisheslistComponent } from './timetable-wish/timetable-wisheslist.component'
import { TimetableSignupComponent } from './timetable-auth/timetable-signup.component'
import { TimetableSigninComponent } from './timetable-auth/timetable-signin.component'
import { TimetableLogoutComponent } from './timetable-auth/timetable-logout.component'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/timetable', pathMatch: 'full' },
    { path: 'signup', component: TimetableSignupComponent },
    { path: 'signin', component: TimetableSigninComponent },
    { path: 'timetable', component: TimetableItemsTipsComponent },
    { path: 'wishes', component: TimetableWisheslistComponent },
    { path: 'logout', component: TimetableLogoutComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);