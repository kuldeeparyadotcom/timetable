import { Component, Input } from '@angular/core';
import { TimetableWish} from "./timetable-wish.model";

import { TimetableAuthService } from "../timetable-auth/timetable-auth.service";


//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

//Bring an image to a component is tricy
//Refer https://github.com/AngularClass/angular2-webpack-starter/commit/d9ea3fb4b57a6d7c320900b83a76e388546b56c6

@Component({
  selector: 'timetable-wish',
  moduleId: module.id,
  templateUrl: './timetable-wish.component.html'
})
export class TimetableWishComponent  {

    constructor ( private timetableAuthService: TimetableAuthService ) {}
    isUserLoggedIn = this.timetableAuthService.isUserLoggedIn();

  @Input() timetableWish: TimetableWish ;
  //timetableWish: TimetableWish = new TimetableWish("You can do it!", "Tina");

}
