// Template-driven form - onsubmit
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TruckStatus } from '../model/truck-status';

@Component({
  selector: 'app-truck-status',
  templateUrl: './truck-status.component.html',
  styleUrl: './truck-status.component.css'
})
export class TruckStatusComponent {

  truckStatusData = new TruckStatus();
  isNew: boolean = true;
  isEdit: boolean = false;

  constructor( private _http: HttpClient){
  
  }

  onSubmit() {
    console.log("coming too onsubmit");
    if ( this.isNew && !this.isEdit){
      this._http.post("http://localhost:3000/truck_status", this.truckStatusData).subscribe();
    } else {
      this._http.put("http://localhost:3000/truck_status", this.truckStatusData).subscribe();
    }
  }

  deleteTruckStatus() {
    this._http.delete("http://localhost:3000/truck/" + this.truckStatusData.id ).subscribe();
  }
}
