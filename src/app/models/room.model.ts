export class room{
    id: number;
    room: number;
    floor:number;
    price: number;
    nights: number;
    desc: string;
    constructor(id: number, room: number, floor: number, price: number, nights: number, desc: string){
        this.id = id;
        this.room = room;
        this.floor = floor;
        this.price = price;
        this.nights = nights;
        this.desc = desc;
    }
}
