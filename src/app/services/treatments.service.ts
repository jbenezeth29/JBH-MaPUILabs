import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Treatment} from "../treatment/treatment";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {
  constructor( private httpClient: HttpClient) {}
  getTreatments(){
    return this.httpClient.get<Treatment[]>('api/treatments');
  }

  addTreatment(newTreatment: Treatment){
    this.httpClient.post('api/treatment', newTreatment).subscribe(reponse => {
      console.log(reponse);
    });
  }
  removeTreatment(treatmentId: string | undefined){
    this.httpClient.delete(`api/treatment/${treatmentId}`).subscribe(reponse => {
      console.log(reponse);
    });
  }

  patchTreatment(newTreatment:Treatment){
    this.httpClient.patch(`api/treatment/${newTreatment._id}`, newTreatment).subscribe(reponse => {
        console.log(reponse);
      }
    );
  }
}
