import { Component, OnInit } from '@angular/core';
import { TimetableItem} from "../timetable-item/timetable-item.model"

import { TimetableItemService } from "../timetable-item/timetable-item.service" ;
import { TimetableAuthService} from "../timetable-auth/timetable-auth.service" ;

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

  constructor(private timetableItemService: TimetableItemService,
    private timetableAuthService: TimetableAuthService
  ) {}

  timetableItem: TimetableItem; 

  isUserLoggedIn = this.timetableAuthService.isUserLoggedIn();

    // timetableItemInput = new TimetableItem("9:00 AM", "12:00 AM", "New Item to be added", "success") ;

    // private timetableItemInput: TimetableItem ;

    onSubmit(form: NgForm) {

      if (this.timetableItem) {
        //Edit
        this.timetableItem.start_time = form.value.start_time;
        this.timetableItem.end_time = form.value.end_time;
        this.timetableItem.description = form.value.description;
        this.timetableItemService.updateTimetableItem(this.timetableItem)
          .subscribe(
            result => console.log(result)
          );
        this.timetableItem = null;
      } else {
          //Create
          //alert("Save button clicked" + start_time + end_time + description);
          const timetableItemInput = new TimetableItem(form.value.start_time, form.value.end_time, form.value.description, "success");
          this.timetableItemService.addTimetableItem(timetableItemInput).subscribe(
          data => console.log(data),
          error => console.error(error)
        );
      }

      form.resetForm();
    }

    onClear(form: NgForm) {
      this.timetableItem = null;
      form.resetForm();
    }

    ngOnInit() {
            //this.timetableItemService.addTimetableItem(this.timetableItemInput);
            this.timetableItemService.timetableIsEdit.subscribe(
              (timetableItem: TimetableItem) => this.timetableItem = timetableItem
            );
    }


}