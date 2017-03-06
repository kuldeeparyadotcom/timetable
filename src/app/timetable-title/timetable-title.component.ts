import { Component } from '@angular/core';

//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

@Component({
  selector: 'timetable-title',
  moduleId: module.id,
  templateUrl: './timetable-title.component.html'
})
export class TimetableTitleComponent  { 
  timetable_title = 'Tips for Prelims 2017' ;
  timetable_subtitle = 'What should be the study plan for last 3 months ?' ;
}