import { Component, OnInit } from '@angular/core';
import { TimetableItem} from "../timetable-item/timetable-item.model"

import { TimetableItemService } from "../timetable-item/timetable-item.service" ;

import { NgForm } from '@angular/forms'

@Component({
  selector: 'timetable-item-input',
  moduleId: module.id,
  templateUrl: './timetable-item-input.component.html',
  styles: [`
    input.ng-invalid.ng-touched {
      border: 1px solid red;
    }
  `]
})
export class TimetableItemInputComponent implements OnInit { 

  constructor(private timetableItemService: TimetableItemService) {}

    // timetableItemInput = new TimetableItem("9:00 AM", "12:00 AM", "New Item to be added", "success") ;

    private timetableItemInput: TimetableItem ;

    onSubmit(form: NgForm) {
      //alert("Save button clicked" + start_time + end_time + description);
      this.timetableItemInput = new TimetableItem(form.value.start_time, form.value.end_time, form.value.description, "success");
      this.timetableItemService.addTimetableItem(this.timetableItemInput);
      form.resetForm();
    }

    ngOnInit() {
            //this.timetableItemService.addTimetableItem(this.timetableItemInput);
    }


}