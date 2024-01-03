// Template-driven form
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Truck } from '../model/truck';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrl: './trucks.component.css'
})
export class TrucksComponent {

  statuses = ['Loading', 'Outbound', 'Returning', 'Maintenance'];
  truckData = new Truck();
  isNew: boolean = true;
  isEdit: boolean = false;

  constructor( private _http: HttpClient){
  
  }

  saveTruck() {
    if ( this.isNew && !this.isEdit){
      this._http.post("http://localhost:3000/truck", this.truckData).subscribe();
    } else {
      this._http.put("http://localhost:3000/truck", this.truckData).subscribe();
    }
  }

  deleteTruck() {
    this._http.delete("http://localhost:3000/truck/" + this.truckData.id ).subscribe();
  }
}
