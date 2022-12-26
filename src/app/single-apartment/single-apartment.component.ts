import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { room } from 'src/app/models/room.model';
import { DataService } from 'src/app/services/data.service';
import { selectedRooms, selectHoteli } from 'src/app/store/selector/post.selector';
import { RoomState } from 'src/app/store/state/room.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from 'src/app/interfaces/room';
import { GetRooms } from '../store/actions/room.action';

@Component({
  selector: 'app-single-apartment',
  templateUrl: './single-apartment.component.html'

})
export class SingleApartmentComponent implements OnInit {
  id!: number;
  room!: room;
  public rooms$: Observable<Room[]>;
  public rooms!: Room[];
  loaded = false;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router, private _store: Store<RoomState>,) {
    this.rooms$ = this._store.pipe(select(selectedRooms));
    this.rooms$.subscribe(val => {
      this.rooms = JSON.parse(JSON.stringify(val));
    route.params.subscribe(params => this.id = params['id']);
  })
}

  ngOnInit(): void {
    this.dataService.getRoom(this.id).subscribe(data => {
      this.room = data
      this.loaded = true;
      this._store.dispatch(new GetRooms());
    })
  }

  onDelete(){
    this.dataService.delete(this.room).subscribe(() =>{
      this.router.navigate(['/ponuda'])
    })
  }

  onUpdate(){
    this.router.navigate(['/editroom', this.room.id])
  }

}
