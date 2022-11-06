import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-available-apartments',
  templateUrl: './available-apartments.component.html',
  styleUrls: ['./available-apartments.component.scss']
})
export class AvailableApartmentsComponent implements OnInit {

  public availableApartments = [
    {
      room: 1,
      floor: 1,
      price: 1000,
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
      desc: 'Hotel Hard Rock Moskva' +
        ' je jos jedan u nizu tematskih hotela '  +
        'ove poznate fransize tematskih restorana' +
        ' koje krasi bogata ponuda' +
        'kao i titula od 5 zvezdica'
    },
  ];

  @Input() newApartment: any;

  constructor() {
  }

  ngOnInit(): void {
    if (this.newApartment) {
      this.availableApartments.push(this.newApartment);
    }
  }
}
