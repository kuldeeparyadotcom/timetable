
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { TimetableAuthService } from './timetable-auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'timetable-auth',
  moduleId: module.id,
  templateUrl: './timetable-auth.component.html'
})
export class TimetableAuthComponent { 

  constructor(private timetableAuthService: TimetableAuthService,
              private router: Router) {}

  isUserLoggedIn = this.timetableAuthService.isUserLoggedIn(); 

}