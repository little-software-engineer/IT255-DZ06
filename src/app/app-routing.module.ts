import { PreporukaComponent } from './preporuka/preporuka.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddApartmentComponent} from './add-apartment/add-apartment.component';
import {AvailableApartmentsComponent} from './available-apartments/available-apartments.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { SingleApartmentComponent } from './single-apartment/single-apartment.component';

//Dodate su odgovarajuće rute IT255-DZ11
const routes: Routes = [
  {
    path: 'ponuda',
    component: AvailableApartmentsComponent
  },
  {
    path: 'add',
    component: AddApartmentComponent
  },
  {
    path: 'about',
    component: ONamaComponent
  },
  {
    path: '',
    component: PocetnaComponent
  },
  {path: 'ponuda/:id', component: SingleApartmentComponent},
  {
    path: 'sugg',
    component: PreporukaComponent
  },
  {path: 'editroom/:id', component: EditRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
