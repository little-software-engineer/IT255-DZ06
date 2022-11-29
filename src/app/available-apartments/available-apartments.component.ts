import {Component, Input, OnInit} from '@angular/core';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { Room } from '../modules/Room';

@Component({
  selector: 'app-available-apartments',
  templateUrl: './available-apartments.component.html',
  styleUrls: ['./available-apartments.component.scss']
})
export class AvailableApartmentsComponent implements OnInit {

  @Input() room: Room;

  [x: string]: any;
  public pricesSum: any;
  public apartmani: any;
  public availableApartments = [
    {
      room: 1,
      floor: 1,
      price: 600,
      nights: 5,
      desc: 'Hotel Waldorf Astoria u centru Berlina' +
        ' je jedan od najlepsih hotela sa 5 zvezdica ' +
        'u ovom delu Evrope' +
        ' sa renomiranom ponudom koja nudi  ' +
        'sve sto je potrebno za kompletan ugodjaj'
    },
    {
      room: 2,
      floor: 1,
      price: 1000,
      nights: 3,
      desc: 'Hotel Hard Rock Moskva' +
        ' je jos jedan u nizu tematskih hotela '  +
        'ove poznate fransize tematskih restorana' +
        ' koje krasi bogata ponuda' +
        'kao i titula od 5 zvezdica'
    },
  ];

  @Input() newApartment: any;


  constructor(private room_service: RoomServiceService) {
    this.room = new Room(3, 3, 600, 5, "Hotel u centru Beogarda zraci svojim luksuzom")

  }

  ngOnInit(): void {
    if (this.newApartment) {
      this.availableApartments.push(this.newApartment);
    }
  }

  public price() {
    this.pricesSum = this.room.nights * this.room.price;
    return this.room_service.getPrice(this.pricesSum);
  };
}
