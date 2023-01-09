
import { room } from '../models/room.model';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {AddApartmentComponent } from "./add-apartment.component";


describe('Component: AddApartment', () => {

    let component: AddApartmentComponent;
    let fixture: ComponentFixture<AddApartmentComponent>;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [AddApartmentComponent]
        });

        
        fixture = TestBed.createComponent(AddApartmentComponent);

        
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('room field validity', () => {
        let errors = {};
        let room = component.form.controls['room'];
        expect(room.valid).toBeFalsy();

        
        errors = room.errors || {};
        expect(errors['required']).toBeTruthy();

       
        room.setValue(-2);
        errors = room.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeTruthy();

       room.setValue(23);
        errors = room.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeFalsy();
    });

   
 

    it('submitting a form emits a room', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['room'].setValue(342);
     
        expect(component.form.valid).toBeTruthy();



     

     
        expect(room.room).toBe(2);
     
    });
});