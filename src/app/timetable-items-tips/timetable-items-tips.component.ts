import { Component } from '@angular/core';
import { TimetableItem} from "../timetable-item/timetable-item.model";
import { TimetableAuthService} from "../timetable-auth/timetable-auth.service";

@Component({
  selector: 'timetable-items-tips',
  moduleId: module.id,
  templateUrl: './timetable-items-tips.component.html',
  styles: [`
      .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        font-style: italic;
      }
  `]
})
export class TimetableItemsTipsComponent  { 
    constructor(private timetableAuthService: TimetableAuthService) {}  

    isUserLoggedIn = this.timetableAuthService.isUserLoggedIn();  
}