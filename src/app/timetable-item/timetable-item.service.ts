import { TimetableItem } from "./timetable-item.model";

export class TimetableItemService {
    /* Temporarily commenting out to simulate some test data

    private timetable_items: TimetableItem[] = [] //Empty array initially
    */

    //Only for testing - add some items to array timetable_items
    item1 = new TimetableItem("09:30 AM", "12:30 PM", "Polity", "success");
    item2 = new TimetableItem("01:30 PM", "02:30 PM", "Current Affairs", "warning");
    item3 = new TimetableItem("02:30 PM", "03:30 PM", "Environment", "success");
    
    private timetable_items: TimetableItem[] = [this.item1, this.item2, this.item3];

    addTimetableItem(timetableItem: TimetableItem) {
        this.timetable_items.push(timetableItem);
    }

    getTimetableItems() {
        return this.timetable_items;
    }

    deleteTimetableItem(timetableItem: TimetableItem) {
        this.timetable_items.splice(this.timetable_items.indexOf(timetableItem),1);
    }
}