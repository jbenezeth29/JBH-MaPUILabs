import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DoctorsService} from "../services/doctors.service";
import {Doctor} from "./doctor";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() doctor!: Doctor | undefined;
  @Output() refrechList = new EventEmitter();
  doctorForm!: FormGroup;

  constructor(private doctorsService: DoctorsService,private formBuilder: FormBuilder ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
  }

  removeDoctor(){
    this.doctorsService.removeDoctor(this.doctor?._id);
    this.refrechList.next('remove');
  }
  patchDoctor(){
    const patchDoctor:Doctor = {
      firstName:this.doctorForm.value['firstName'],
      lastName:this.doctorForm.value['lastName'],
      speciality:this.doctorForm.value['speciality'],
      _id:this.doctor?._id,
    }
    this.doctorsService.patchDoctor(patchDoctor);
    this.refrechList.next('patch');
  }

  initForm(){
    this.doctorForm = this.formBuilder.group({
      firstName: this.doctor?.firstName,
      lastName: this.doctor?.lastName,
      speciality: this.doctor?.speciality,
    })
  }


}
