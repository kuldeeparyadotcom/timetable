import { Routes, RouterModule} from '@angular/router';

import { TimetableItemsTipsComponent } from './timetable-items-tips/timetable-items-tips.component'
import { TimetableWisheslistComponent } from './timetable-wish/timetable-wisheslist.component'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/timetable', pathMatch: 'full' },
    { path: 'timetable', component: TimetableItemsTipsComponent },
    { path: 'wishes', component: TimetableWisheslistComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);