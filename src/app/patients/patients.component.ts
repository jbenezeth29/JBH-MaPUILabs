import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../services/patients.service";
import {Patient} from "../patient/patient";
import {FormGroup,FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  patientForm!: FormGroup;

  constructor(private patientsService: PatientsService,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.refrechList();
    this.initForm();
  }
  addPatient() {
    const newPatient:Patient = {
      firstName:this.patientForm.value['firstName'],
      lastName:this.patientForm.value['lastName'],
      age:this.patientForm.value['age'],
      sex:this.patientForm.value['sex'],
    }
    this.patientsService.addPatient(newPatient);
    this.refrechList();
  }

  refrechList(){
    this.patientsService.getPatients().subscribe((response: Patient[]) => {
      this.patients = response
    });
  }

  initForm(){
    this.patientForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      age:0,
      sex:0
    })
  }

}
