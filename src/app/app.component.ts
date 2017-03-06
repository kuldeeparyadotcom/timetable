import { Component } from '@angular/core';

//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent  { 
  message = 'Timetable app coming soon...' ; 
}
