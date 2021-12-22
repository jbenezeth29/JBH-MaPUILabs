import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Treatment} from "../treatment/treatment";
import {TreatmentsService} from "../services/treatments.service";

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {
  treatments: Treatment[] = [];
  treatmentForm!: FormGroup;

  constructor(private patientsService: TreatmentsService,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.refrechList();
    this.initForm();
  }
  addTreatment() {
    const newTreatment:Treatment = {
      start:this.treatmentForm.value['start'],
      end:this.treatmentForm.value['end'],
      text:this.treatmentForm.value['text'],
      doctor:this.treatmentForm.value['doctor'],
    }
    this.patientsService.addTreatment(newTreatment);
    this.refrechList();
  }

  refrechList(){
    this.patientsService.getTreatments().subscribe((response: Treatment[]) => {
      this.treatments = response
    });
  }

  initForm(){
    this.treatmentForm = this.formBuilder.group({
      start: undefined,
      end: undefined,
      text: '',
    })
  }

}
