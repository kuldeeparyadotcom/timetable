import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TimetableTitleComponent } from './timetable-title/timetable-title.component'
import { TimetableHeaderComponent } from './timetable-header/timetable-header.component'
import { TimetableWishComponent } from './timetable-wish/timetable-wish.component'
import { TimetableWisheslistComponent } from './timetable-wish/timetable-wisheslist.component'
import { TimetableItemComponent } from './timetable-item/timetable-item.component'
import { TimetableItemslistComponent } from './timetable-item/timetable-itemslist.component'
import { TimetableTipComponent } from './timetable-tip/timetable-tip.component'
import { TimetableTipslistComponent } from './timetable-tip/timetable-tipslist.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    TimetableTitleComponent, 
    TimetableHeaderComponent,
    TimetableWishComponent,
    TimetableWisheslistComponent,
    TimetableItemComponent,
    TimetableItemslistComponent,
    TimetableTipComponent,
    TimetableTipslistComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
