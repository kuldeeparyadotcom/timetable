import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TimetableTitleComponent } from './timetable-title/timetable-title.component'
import { TimetableHeaderComponent } from './timetable-header/timetable-header.component'
import { TimetableWishComponent } from './timetable-wish/timetable-wish.component'
import { TimetableWisheslistComponent } from './timetable-wish/timetable-wisheslist.component'
import { TimetableItemComponent } from './timetable-item/timetable-item.component'
import { TimetableItemslistComponent } from './timetable-item/timetable-itemslist.component'
import { TimetableTipComponent } from './timetable-tip/timetable-tip.component'
import { TimetableTipslistComponent } from './timetable-tip/timetable-tipslist.component'
import {TimetableItemInputComponent} from './timetable-item-input/timetable-item-input.component'
import { TimetableItemsTipsComponent} from './timetable-items-tips/timetable-items-tips.component'
import { TimetableSigninComponent} from './timetable-auth/timetable-signin.component'
import { TimetableSignupComponent } from './timetable-auth/timetable-signup.component'
import { TimetableLogoutComponent } from './timetable-auth/timetable-logout.component'
import { TimetableAuthComponent } from './timetable-auth/timetable-auth.component'
import { HttpModule } from '@angular/http'

import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule,
      FormsModule,
      routing,
      HttpModule],
  declarations: [ 
    AppComponent, 
    TimetableTitleComponent, 
    TimetableHeaderComponent,
    TimetableWishComponent,
    TimetableWisheslistComponent,
    TimetableItemComponent,
    TimetableItemslistComponent,
    TimetableTipComponent,
    TimetableTipslistComponent,
    TimetableItemInputComponent,
    TimetableItemsTipsComponent,
    TimetableSigninComponent,
    TimetableSignupComponent,
    TimetableLogoutComponent,
    TimetableAuthComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
