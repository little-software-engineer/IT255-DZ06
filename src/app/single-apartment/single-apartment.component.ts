import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { room } from 'src/app/models/room.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-apartment',
  templateUrl: './single-apartment.component.html'

})
export class SingleApartmentComponent implements OnInit {
  id!: number;
  room!: room;
  loaded = false;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.dataService.getRoom(this.id).subscribe(data => {
      this.room = data
      this.loaded = true;
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
