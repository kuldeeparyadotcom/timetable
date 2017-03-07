import { TimetableTip } from "./timetable-tip.model";

export class TimetableTipService {
    /* Temporarily commenting out to simulate some test data

    private timetable_tips: TimetableTip[] = [] //Empty array initially
    */

    //Only for testing - add some items to array timetable_tips
    item1 = new TimetableTip("Drink plenty of water", "text-success");
    item2 = new TimetableTip("Take 8 hours of sound sleep", "text-primary");
    item3 = new TimetableTip("Get up early in the morning", "text-danger");
    
    private timetable_tips: TimetableTip[] = [this.item1, this.item2, this.item3];

    addTimetableTip(timetableTip: TimetableTip) {
        this.timetable_tips.push(timetableTip);
    }

    getTimetableTips() {
        return this.timetable_tips;
    }

    deleteTimetableItem(timetableTip: TimetableTip) {
        this.timetable_tips.splice(this.timetable_tips.indexOf(timetableTip),1);
    }
}