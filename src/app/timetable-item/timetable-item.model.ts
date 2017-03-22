export class TimetableItem {
    constructor( public start_time: string,
                public end_time: string,
                public description: string,
                public status: string,
                public timetableitemId?: string ) {}
}