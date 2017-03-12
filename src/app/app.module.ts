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

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
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
    TimetableItemInputComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
