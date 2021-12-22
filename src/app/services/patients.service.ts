import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../patient/patient";
import {Observable} from "rxjs";

@Injectable()
export class PatientsService {
  patients: Patient[] | undefined;

  constructor( private httpClient: HttpClient) {}
  getPatients(){
    return this.httpClient.get<Patient[]>('api/patients');
  }

  addPatient(newPatient: Patient){
    this.httpClient.post('api/patient', newPatient).subscribe(reponse => {
      console.log(reponse);
      });
  }
  removePatient(patientId: string | undefined){
    this.httpClient.delete(`api/patient/${patientId}`).subscribe(reponse => {
      console.log(reponse);
    });
  }

  patchPatient(newPatient:Patient){
    this.httpClient.patch(`api/patient/${newPatient._id}`, newPatient).subscribe(reponse => {
        console.log(reponse);
      }
    );
  }
}
