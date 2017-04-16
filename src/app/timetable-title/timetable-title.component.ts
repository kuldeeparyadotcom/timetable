import { Component, OnInit, Input } from '@angular/core';
import { TimetableAuthService } from "../timetable-auth/timetable-auth.service";

//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

@Component({
  selector: 'timetable-title',
  moduleId: module.id,
  templateUrl: './timetable-title.component.html'
})
export class TimetableTitleComponent implements OnInit { 

  constructor(private timetableAuthService: TimetableAuthService) {}

  @Input() isUserLoggedIn: boolean = this.timetableAuthService.isUserLoggedIn();
  // isUserLoggedIn = this.timetableAuthService.isUserLoggedIn();

  timetable_title = 'Stay Focused, Stay Blessed!' ;
  timetable_subtitle = 'Stay Focused, Stay Blessed!' ;

  ngOnInit() {
    this.isUserLoggedIn = this.timetableAuthService.isUserLoggedIn();
  }
}