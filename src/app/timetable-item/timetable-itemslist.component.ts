import { Component, OnInit } from '@angular/core';
import { TimetableItemService } from "./timetable-item.service" ;
import { TimetableItem } from "./timetable-item.model"

@Component({
  selector: 'timetable-itemslist',
  moduleId: module.id,
  templateUrl: './timetable-itemslist.component.html'
})
export class TimetableItemslistComponent implements OnInit{ 
  constructor(private timetableItemService: TimetableItemService) {}
        
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