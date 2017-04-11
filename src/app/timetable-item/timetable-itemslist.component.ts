import { Component, OnInit } from '@angular/core';
import { TimetableItemService } from "./timetable-item.service" ;
import { TimetableItem } from "./timetable-item.model"
import { TimetableAuthService } from "../timetable-auth/timetable-auth.service";

@Component({
  selector: 'timetable-itemslist',
  moduleId: module.id,
  templateUrl: './timetable-itemslist.component.html'
})
export class TimetableItemslistComponent implements OnInit{ 
  constructor(private timetableItemService: TimetableItemService, 
  private timetableAuthService: TimetableAuthService
  ) {}
  
  isUserLoggedIn = this.timetableAuthService.isUserLoggedIn();
        
        // private timetableItems: TimetableItem[];
        timetableItems: TimetableItem[];

        ngOnInit() {
            this.timetableItemService.getTimetableItems().subscribe(
              (timetableitems: TimetableItem[]) => {
                this.timetableItems = timetableitems;
              }
            );
        }

}