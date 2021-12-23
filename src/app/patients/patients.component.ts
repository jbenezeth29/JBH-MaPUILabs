import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../services/patients.service";
import {Patient} from "../patient/patient";
import {FormGroup, FormBuilder, FormArray, FormControl} from "@angular/forms";
import {TreatmentsService} from "../services/treatments.service";
import {Treatment} from "../treatment/treatment";


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  patientForm!: FormGroup;
  treatments: Treatment[] = [];

  constructor(
    private patientsService: PatientsService,
    private formBuilder: FormBuilder,
    private treatmentService: TreatmentsService ) { }

  ngOnInit(): void {
    this.refrechList();
    this.initForm();
    this.treatmentService.getTreatments().subscribe((response: Treatment[]) => {
      this.treatments = response
    });
  }
  addPatient() {
    const newPatient:Patient = {
      firstName:this.patientForm.value['firstName'],
      lastName:this.patientForm.value['lastName'],
      age:this.patientForm.value['age'],
      sex:this.patientForm.value['sex'],
      treatments:this.patientForm.value['treatments'],
    }
    this.patientsService.addPatient(newPatient);
    this.refrechList();
  }

  refrechList(){
    this.patientsService.getPatients().subscribe((response: Patient[]) => {
      this.patients = response
    });
  }

  initForm() {
    this.patientForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      age: 0,
      sex: 0,
      treatments: this.formBuilder.array([])
    })
  }

  onCheckboxChange(e: any) {
    const treatmentsArray: FormArray = this.patientForm.get('treatments') as FormArray;

    if (e.target.checked) {
      treatmentsArray.push(new FormControl(e.target.value));
    } else {
      treatmentsArray.controls.filter(treatment=>treatment===e.target.value);
    }
  }
}
