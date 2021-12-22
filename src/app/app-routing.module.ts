import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PatientsComponent} from "./patients/patients.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {TreatmentsComponent} from "./treatments/treatments.component";

const appRoutes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'treatments', component: TreatmentsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
