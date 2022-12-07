import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { room } from '../models/room.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.scss']
})
export class AddApartmentComponent implements OnInit {
  addForm!: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.addForm = this.fb.group({
      room: ['', Validators.required],
      floor: ['', Validators.required],
      price: ['', Validators.required],
      nights: ['', Validators.required],
      desc: ['', Validators.required],
      klima:new FormControl(false),
    minibar:new FormControl(false),
    sauna:new FormControl(false)
    })

  }

  onSubmit(){
    if(!this.addForm.valid){
      return;
    }
    const room= this.addForm.controls['room'].value;
    const floor = this.addForm.controls['floor'].value;
    const price = this.addForm.controls['price'].value;
    const nights = this.addForm.controls['nights'].value;
    const desc = this.addForm.controls['desc'].value;

    let newroom = new room(0, room, floor, price, nights, desc);
    console.log(newroom);

    this.dataService.create(newroom).subscribe(room => this.router.navigate(['/ponuda', room.id]));

  }
}
