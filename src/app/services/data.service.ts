//Servisna klasa
import { Injectable } from '@angular/core';
import { room } from '../models/room.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL : string= "http://localhost:3000/rooms";

  constructor(public http: HttpClient) { }

  getRooms() {
    return this.http.get<room[]>(this.API_URL);
  }

  getRoom(id: number){
    return this.http.get<room>(`${this.API_URL}/${id}`);
  }

  create(room: room){
    return this.http.post<room>(this.API_URL, room);
  }

  update(room: room){
    return this.http.put<room>(`${this.API_URL}/${room.id}`, room);
  }

  delete(room: room){

    return this.http.delete<room>(`${this.API_URL}/${room.id}`);
  }

  list() {
    return this.http.get(`${this.API_URL}`);
  }
}
