import { PreporukaComponent } from './preporuka/preporuka.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddApartmentComponent} from './add-apartment/add-apartment.component';
import {AvailableApartmentsComponent} from './available-apartments/available-apartments.component';

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
  {
    path: 'sugg',
    component: PreporukaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
