import { TimetableItem } from "./timetable-item.model";
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
// import { Observable } from "rxjs";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class TimetableItemService {
    
    
    private timetable_items: TimetableItem[] = [] //Empty array initially
    

    //Only for testing - add some items to array timetable_items
    // item1 = new TimetableItem("09:30 AM", "12:30 PM", "Polity", "bg-success");
    // item2 = new TimetableItem("01:30 PM", "02:30 PM", "Current Affairs", "bg-warning");
    // item3 = new TimetableItem("02:30 PM", "03:30 PM", "Environment", "bg-success");
    
    // private timetable_items: TimetableItem[] = [this.item1, this.item2, this.item3];

    constructor(private http: Http) {}

    addTimetableItem(timetableItem: TimetableItem) {
        this.timetable_items.push(timetableItem);
        //Logic to get data from Mongo DB Database
        const body = JSON.stringify(timetableItem);
        const headers = new Headers({'Content-Type': 'application/json'});

         return this.http.post('http://192.168.1.69:7018/timetableitem', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const timetableitem = new TimetableItem(result.obj.start_time, result.obj.end_time, result.obj.description, result.obj.status);
                this.timetable_items.push(timetableitem);
                return timetableitem;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getTimetableItems() {
        // return this.timetable_items;
        return this.http.get('http://192.168.1.69:7018/timetableitems')
            .map((response: Response) => {
                const timetableitems = response.json();
                let transformedTimetableitems: TimetableItem[] = [];
                for (let timetableitem of timetableitems) {
                    transformedTimetableitems.push(new TimetableItem(timetableitem.start_time, timetableitem.end_time, timetableitem.description, timetableitem.status, timetableitem._id));
                }
                this.timetable_items = transformedTimetableitems;
                console.log(transformedTimetableitems);
                return transformedTimetableitems;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteTimetableItem(timetableItem: TimetableItem) {
        this.timetable_items.splice(this.timetable_items.indexOf(timetableItem),1);
        //Remove from database as well
        return this.http.delete('http://192.168.1.69:7018/timetableitem/' + timetableItem.timetableitemId)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }
}