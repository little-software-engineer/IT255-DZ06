import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableApartmentsComponent } from './available-apartments/available-apartments.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PreporukaComponent } from './preporuka/preporuka.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableApartmentsComponent,
    AddApartmentComponent,
    HeaderComponent,
    ONamaComponent,
    PocetnaComponent,
    PreporukaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
