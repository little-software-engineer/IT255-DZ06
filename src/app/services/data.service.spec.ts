import { DataService } from '../services/data.service';

import { room } from '../models/room.model';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {AddApartmentComponent } from "./add-apartment.component";

describe('DataService', () => {
  let dataService: dataService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testUrl: string = `${environment.API_URL}`;
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [dataService]
});
dataService = TestBed.inject(dataService);
httpTestingController = TestBed.inject(HttpTestingController);
});
});

it('should return rooms with HTTPClient', () => {
  const rooms: any[] = [];
  dataService.getRooms().subscribe({next: rooms => {
    expect(rooms).toEqual(rooms);
  }
});
const req = httpTestingController.expectOne(testUrl);
expect(req.request.method).toEqual('GET');
req.flush(rooms);
})

it('should remove room', () => {
  const id: string = '4'
  dataService.removeRoom(id).subscribe({next: rooms => {
    expect(rooms).toEqual(null);
  }
});
const req = httpTestingController.expectOne(testUrl + '/' + id);
expect(req.request.method).toEqual('DELETE');
req.flush(null);
});

it('should upload room', () => {
const formData: FormData =  new FormData();
dataService.create(formData).subscribe({next: data => 
  {expect(data).toEqual(formData);}
});
const req = httpTestingController.expectOne(testUrl);
expect(req.request.method).toEqual('POST');
req.flush(formData);
});