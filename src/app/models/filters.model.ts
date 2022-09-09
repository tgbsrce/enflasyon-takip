export class filters{

    public country : string;
    public start ?: Date;
    public end ?: Date;
  static start: any;
  static country: any;
  static end: any;
 
 
  
  
  

    constructor(country: string, start ?: Date, end ?: Date){
        this.country = country;
        this.start = start;
        this.end = end;
    } 

}