import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { room } from 'src/app/models/room.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: 'edit-room.component.html'

})
export class EditRoomComponent implements OnInit {
  room!: room;
  editForm!: FormGroup;
  private subscription!: Subscription;
  constructor(private fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.editForm = this.fb.group({
      room: ['', Validators.required],
      floor: ['', Validators.required],
      price: ['', Validators.required],
      nights: ['', Validators.required],
      desc: ['', Validators.required],
    })
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.subscription = this.dataService.getRoom(id).subscribe(room => {
        this.room = room;
        this.editForm.setValue({
          room: this.room.room,
          floor: this.room.floor,
          price: this.room.price,
          nights: this.room.nights,
          desc: this.room.desc,
        })
      })
    })

  }

  onSubmit() {
    if (!this.editForm.valid) {
      return;
    }
    const room = this.editForm.controls['room'].value;
    const floor = this.editForm.controls['floor'].value;
    const price = this.editForm.controls['price'].value;
    const nights = this.editForm.controls['nights'].value;
   const desc = this.editForm.controls['desc'].value;

    let newroom = new room(this.room.id, room, floor, price, nights, desc);
    console.log(newroom);

    this.dataService.update(newroom).subscribe(() => {
      this.router.navigate(['/ponuda', this.room.id])
    });
  }
}
