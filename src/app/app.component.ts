import { Component } from '@angular/core';
import { TimetableItemService } from "./timetable-item/timetable-item.service" ;
import { TimetableWishService } from "./timetable-wish/timetable-wish.service" ;
import { TimetableTipService } from "./timetable-tip/timetable-tip.service" ;
import { TimetableAuthService } from "./timetable-auth/timetable-auth.service" ;

//moduleID in Component decorator plays a crucial role
//Without this defined, templateUrl throws 404 on ./app.component.html
//https://github.com/mgechev/angular-seed/issues/628

//Bring an image to a component is tricy
//Refer https://github.com/AngularClass/angular2-webpack-starter/commit/d9ea3fb4b57a6d7c320900b83a76e388546b56c6

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
    providers: [ TimetableItemService,
                 TimetableWishService,
                 TimetableTipService,
                 TimetableAuthService
            ]
})
export class AppComponent { 
  message = 'Timetable' ;
  
}
