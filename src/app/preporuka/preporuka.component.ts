import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent implements OnInit {
  public preporuke = [
    {

      title: 'Night Club Radost'  ,
      price: 1000,
      desc: 'Nocni klub Radost nalazi se u centru' +
        ' Praga i predstavlja jedan od najboljih klubova u tom ' +
        'delu Evrope, ' +
        ' a tu je takodje i sniman spot  ' +
        'od Rihanne - Dont stop the music.'
    },
    {

      title: 'Hard Rock Cafe Berlin'  ,
      price: 1000,
      desc: 'Hard Rock Cafe u Berlinu predstavlja' +
        ' jedan u nizu ovih muzicko-tematskih restorana ' +
        'u svetu, ' +
        ' a obecan je i dobar provod i dobra hrana, ' +
        'kao i suveniri.'
    },
  ];

  @Input() newPreporuka: any;

  constructor() {
  }

  ngOnInit(): void {
    if (this.newPreporuka) {
      this.preporuke.push(this.newPreporuka);
    }
  }
}
