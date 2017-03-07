import { Component, OnInit } from '@angular/core';
import { TimetableTipService } from "./timetable-tip.service" ;
import { TimetableTip } from "./timetable-tip.model"

@Component({
  selector: 'timetable-tipslist',
  moduleId: module.id,
  templateUrl: './timetable-tipslist.component.html'
})
export class TimetableTipslistComponent implements OnInit{ 
  constructor(private timetableTipService: TimetableTipService) {}
        
        private timetableTips: TimetableTip[];

        ngOnInit() {
            this.timetableTips = this.timetableTipService.getTimetableTips();
        }

}