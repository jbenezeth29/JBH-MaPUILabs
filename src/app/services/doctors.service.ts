import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../doctor/doctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  getDoctors() {
    return this.httpClient.get<Doctor[]>('api/doctors');
  }

  addDoctor(newDoctor: Doctor) {
    this.httpClient.post('api/doctor', newDoctor).subscribe(reponse => {
      console.log(reponse);
    });
  }

  removeDoctor(doctorId: string | undefined) {
    this.httpClient.delete(`api/doctor/${doctorId}`).subscribe(reponse => {
      console.log(reponse);
    });
  }

  patchDoctor(newDoctor: Doctor) {
    this.httpClient.patch(`api/doctor/${newDoctor._id}`, newDoctor).subscribe(reponse => {
        console.log(reponse);
      }
    );
  }
}
