import {Treatment} from "../treatment/treatment";

export interface Patient{
  _id?: string
  firstName: string
  age: number
  lastName: string
  sex: number
  treatments?: Treatment[]
}

