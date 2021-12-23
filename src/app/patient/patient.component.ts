import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from "./patient";
import {PatientsService} from "../services/patients.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Treatment} from "../treatment/treatment";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  @Input() patient!: Patient | undefined;
  @Input() treatments!: Treatment[] | undefined;
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
      sex: this.patient?.sex,
      treatments: this.formBuilder.array(['checked'])
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
  isChecked(treatment:Treatment){
    if(this.patient?.treatments) {

      console.log(this.patient?.treatments)
      return this.patient?.treatments.find(o => JSON.stringify(o) === JSON.stringify(treatment._id));
    }
    return false;
  }

}
