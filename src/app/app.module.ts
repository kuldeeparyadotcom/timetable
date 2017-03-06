import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TimetableTitleComponent } from './timetable-title/timetable-title.component'
import { TimetableHeaderComponent } from './timetable-header/timetable-header.component'
import { TimetableWishComponent } from './timetable-wish/timetable-wish.component'
import { TimetableItemComponent } from './timetable-item/timetable-item.component'
import { TimetableItemslistComponent } from './timetable-item/timetable-itemslist.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    TimetableTitleComponent, 
    TimetableHeaderComponent,
    TimetableWishComponent,
    TimetableItemComponent,
    TimetableItemslistComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
