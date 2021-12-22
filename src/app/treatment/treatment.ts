import {Doctor} from "../doctor/doctor";

export interface Treatment{
  _id?: string
  start: Date
  end: Date
  text: string
  doctor?: Doctor
}

