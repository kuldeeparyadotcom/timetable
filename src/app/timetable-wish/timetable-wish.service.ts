import { TimetableWish } from "./timetable-wish.model";

export class TimetableWishService {
    /* Temporarily commenting out to simulate some test data

    private timetable_items: TimetableItem[] = [] //Empty array initially
    */

    //Only for testing - add some items to array timetable_items
    item1 = new TimetableWish("All the best!", "Rachit");
    item2 = new TimetableWish("Love", "Tina");
    item3 = new TimetableWish("Good Luck!", "Praveen");
    
    private timetable_wishes: TimetableWish[] = [this.item1, this.item2, this.item3];

    addTimetableItem(timetableWish: TimetableWish) {
        this.timetable_wishes.push(timetableWish);
    }

    getTimetableWishes() {
        return this.timetable_wishes;
    }

    deleteTimetableItem(timetableWish: TimetableWish) {
        this.timetable_wishes.splice(this.timetable_wishes.indexOf(timetableWish),1);
    }
}