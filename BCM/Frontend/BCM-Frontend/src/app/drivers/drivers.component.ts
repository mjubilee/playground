// Reactive form
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Driver } from '../model/driver';
import { createStrengthValidator } from '../util/formValidator';
import { creatGroupValidator } from '../util/groupValidator';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent {
  
  driverData = new Driver();

  // First approach : control individual form element
  // firstName = new FormControl('');

  // Second approach : group all of the form control
  // driverProfile = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //   })
  // });
  
  // Third approach : using formbuilder to create group all of the form control
  //  driverProfile = this._formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this._formBuilder.group({
  //     street: [''],
  //     city: ['']
  //   })
  // });

  // Fourth approach : using formArray to create group all of the form control
  driverProfile = this._formBuilder.group({
    firstName: ['', {
      validators: [Validators.required, Validators.minLength(3)]
    }],
    lastName: ['', [Validators.required, Validators.minLength(5), createStrengthValidator()]
    ],
    address: this._formBuilder.group({
      street: [''],
      city: ['']
    }),
    aliases: this._formBuilder.array([this._formBuilder.control('')]),
  },
  {
    validators: [creatGroupValidator('firstName', 'lastName')]
  }
  );

  isNew: boolean = true;
  isEdit: boolean = false;

  constructor( private _http: HttpClient, private _formBuilder: FormBuilder ){
  
  }


  deleteDriver() {
    this._http.delete("http://localhost:3000/driver/" + this.driverData.id ).subscribe();
  }

  onSubmit() {
    if ( this.isNew && !this.isEdit){
      this._http.post("http://localhost:3000/driver", this.driverProfile.value).subscribe();
    } else {
      this._http.put("http://localhost:3000/driver", this.driverProfile.value).subscribe();
    }
  }

  // Used setValue for every controller or use patchValue to update the whole structure
  updateProfile() {
    this.driverProfile.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  get aliases() {
    return this.driverProfile.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this._formBuilder.control(''));
  }

  // getFirstName() {
  //   return this.driverProfile.get('firstName');
  // }

  get registerFormControl() {
    return this.driverProfile.controls;
  }

  get firstName() {
    return this.driverProfile.controls['firstName'];
  }

  get lastName() {
    return this.driverProfile.controls['lastName'];
  }
}
