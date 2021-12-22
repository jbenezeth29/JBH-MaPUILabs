import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import {HttpClientModule} from "@angular/common/http";
import {PatientsService} from "./services/patients.service";
import { PatientComponent } from './patient/patient.component';
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {DoctorsComponent} from "./doctors/doctors.component";
import { DoctorComponent } from './doctor/doctor.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentsComponent } from './treatments/treatments.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent,
    DoctorsComponent,
    DoctorComponent,
    TreatmentComponent,
    TreatmentsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    PatientsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
