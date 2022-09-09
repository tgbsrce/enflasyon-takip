export class Filters {
    country? : string;
    start?: Date;
    end?: Date;
 
    constructor(data: any) {
        this.country = data.country || 'turkey';
        this.start = data.start || null;
        this.end = data.end || null;
    } 

}