import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { TreatmentsService } from '../services/treatments.service';
import {Treatment} from "./treatment";

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  @Input() treatment!: Treatment | undefined;
  @Output() refrechList = new EventEmitter();
  treatmentForm!: FormGroup;

  constructor(private treatmentsService: TreatmentsService,private formBuilder: FormBuilder ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
  }

  removeTreatment(){
    this.treatmentsService.removeTreatment(this.treatment?._id);
    this.refrechList.next('remove');
  }
  patchTreatment(){
    const patchTreatment:Treatment = {
      start:this.treatmentForm.value['start'],
      end:this.treatmentForm.value['end'],
      text:this.treatmentForm.value['text'],
      _id:this.treatment?._id,
    }
    this.treatmentsService.patchTreatment(patchTreatment);
    this.refrechList.next('patch');
  }

  initForm(){
    this.treatmentForm = this.formBuilder.group({
      start: this.treatment?.start,
      end: this.treatment?.end,
      text: this.treatment?.text,
    })
  }

}
