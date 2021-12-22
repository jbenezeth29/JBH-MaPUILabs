import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PatientsComponent} from "./patients/patients.component";


const appRoutes: Routes = [
  { path: 'patients', component: PatientsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
