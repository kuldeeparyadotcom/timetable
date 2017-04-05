import { Component, OnInit } from '@angular/core';
import { TimetableWishService } from "./timetable-wish.service" ;
import { TimetableWish } from "./timetable-wish.model"

@Component({
  selector: 'timetable-wisheslist',
  moduleId: module.id,
  templateUrl: './timetable-wisheslist.component.html'
})
export class TimetableWisheslistComponent implements OnInit{ 
  constructor(private timetableWishService: TimetableWishService) {}
        
        // private timetableWishes: TimetableWish[];
        timetableWishes: TimetableWish[];

        ngOnInit() {
            this.timetableWishes = this.timetableWishService.getTimetableWishes();
        }

}