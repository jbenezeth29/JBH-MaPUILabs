import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from "./patient";
import {PatientsService} from "../services/patients.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  @Input() patient!: Patient | undefined;
  @Output() refrechList = new EventEmitter();
  patientForm!: FormGroup;

  constructor(private patientsService: PatientsService,private formBuilder: FormBuilder ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
  }

  removePatient(){
    this.patientsService.removePatient(this.patient?._id);
    this.refrechList.next('remove');
  }
  patchPatient(){
    const patchPatient:Patient = {
      firstName:this.patientForm.value['firstName'],
      lastName:this.patientForm.value['lastName'],
      age:this.patientForm.value['age'],
      sex:this.patientForm.value['sex'],
      _id:this.patient?._id,
    }
    this.patientsService.patchPatient(patchPatient);
    this.refrechList.next('patch');
  }

  initForm(){
    this.patientForm = this.formBuilder.group({
      firstName: this.patient?.firstName,
      lastName: this.patient?.lastName,
      age: this.patient?.age,
      sex: this.patient?.sex
    })
  }

}
