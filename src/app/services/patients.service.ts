import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PatientsService {
  public todoList$ = this.getPatients();
  patients= [
    {
      firstName: 'firstName',
      lastName: 'lastName',
      age: 25,
      sex: 1
    }
  ]
  constructor( private httpClient: HttpClient) {}
  getPatients(){
    return this.httpClient.get<any>('https://www.googleapis.com/books/v1/volumes?q=extreme%20programming');
  }
}
