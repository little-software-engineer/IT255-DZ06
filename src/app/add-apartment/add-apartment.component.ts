import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.scss']
})
export class AddApartmentComponent implements OnInit {
  form = new FormGroup({
    room: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    desc:  new FormControl(null, [Validators.required, Validators.minLength(6)]),
    klima:new FormControl(false),
    minibar:new FormControl(false),
    sauna:new FormControl(false)
  });

  @Output() apartmentObject: EventEmitter<any> = new EventEmitter<any>();
  apartment: any;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.form.valid) {
      this.apartment = this.form.value;
      this.apartmentObject.emit(this.apartment);
    }
  }

  onSubmit(value: string): void {


    console.log('Uspesno ste dodali sobu!');

  }
}
