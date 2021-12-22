import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DoctorsService} from "../services/doctors.service";
import {Doctor} from "../doctor/doctor";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];
  doctorForm!: FormGroup;

  constructor(private doctorsService: DoctorsService,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.refrechList();
    this.initForm();
  }
  addDoctor() {
    const newDoctor:Doctor = {
      firstName:this.doctorForm.value['firstName'],
      lastName:this.doctorForm.value['lastName'],
      speciality:this.doctorForm.value['speciality'],
    }
    this.doctorsService.addDoctor(newDoctor);
    this.refrechList();
  }

  refrechList(){
    this.doctorsService.getDoctors().subscribe((response: Doctor[]) => {
      this.doctors = response
    });
  }

  initForm(){
    this.doctorForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      speciality:''
    })
  }
}
