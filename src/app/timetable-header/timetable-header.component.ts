import { Component } from '@angular/core';

//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

//Bring an image to a component is tricy
//Refer https://github.com/AngularClass/angular2-webpack-starter/commit/d9ea3fb4b57a6d7c320900b83a76e388546b56c6

@Component({
  selector: 'timetable-header',
  moduleId: module.id,
  templateUrl: './timetable-header.component.html'
})
export class TimetableHeaderComponent  {
  timetable_header = 'assets/img/timetable_header.jpg';
}
