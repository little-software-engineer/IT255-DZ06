import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { room } from '../models/room.model';
import { Room } from '../modules/Room';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-available-apartments',
  templateUrl: './available-apartments.component.html',
  styleUrls: ['./available-apartments.component.scss']
})
export class AvailableApartmentsComponent implements OnInit {

  @Input()
  room!: Room;

  [x: string]: any;
  public pricesSum: any;
  public apartmani: any;
  todoList:any = [];
    rooms: room[] = [];

    @HostBinding('class') classes = "mt-3 container";

    constructor(private router: Router, private dataService: DataService, private room_service: RoomServiceService) {

     }

     ngOnInit(): void {
      this.listTodos();
    }

    listTodos(){
      this.dataService.list().subscribe((response)=>{
        this.todoList = response;
      }
      )
    }

    seeDetails(id: number){
      this.router.navigate(['/ponuda', id]);
    }

  public price() {
    this.pricesSum = this.room.nights * this.room.price;
    return this.room_service.getPrice(this.pricesSum);
  };
}
