export class Room {
    room: number;
    floor: number;
    price: number;
    nights: number;
    desc: string;

    constructor(room: number, floor: number, price: number, nights: number, desc: string) {
        this.room = room;
        this.floor = floor;
        this.price = price;
        this.nights = nights;
        this.desc = desc;
    }

}
