import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimetableItem} from "./timetable-item.model";

import { TimetableItemService } from './timetable-item.service';

//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

//Bring an image to a component is tricy
//Refer https://github.com/AngularClass/angular2-webpack-starter/commit/d9ea3fb4b57a6d7c320900b83a76e388546b56c6

@Component({
  selector: 'timetable-item',
  moduleId: module.id,
  templateUrl: './timetable-item.component.html',
  styles: [`
      .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        font-style: italic;
      }
  `]
})
export class TimetableItemComponent  { 

  constructor(private timetableItemService: TimetableItemService) {}
    //@Input() timetableItem = new TimetableItem("9:00 AM", "12:00 AM", "Slot one of studies", "success") ;
    @Input() timetableItem: TimetableItem ;
    @Output() editClicked = new EventEmitter<String>();

    onEdit() {
        // alert("Edit Item");
        this.editClicked.emit('A New Value');
    }

    onDelete() {
        // alert("Delete Item");
        // this.timetableItemService.deleteTimetableItem(this.timetableItem);
        this.timetableItemService.deleteTimetableItem(this.timetableItem)
            .subscribe(
                result => console.log(result)
            );
    }
}
