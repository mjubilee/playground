import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrucksComponent } from './trucks/trucks.component';
import { DriversComponent } from './drivers/drivers.component';
import { TruckStatusComponent } from './truck-status/truck-status.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'truck', component: TrucksComponent, pathMatch: 'full' },
  { path: 'driver', component: DriversComponent, pathMatch: 'full' },
  { path: 'status', component: TruckStatusComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
