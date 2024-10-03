import { Injectable } from '@angular/core';
import {hairList} from "../shared/mockData-hair";
import {Observable, of} from "rxjs";
import {hair} from "../shared/models/hair";

@Injectable({
  providedIn: 'root'
})
export class HairService {
  private hair: hair[] = hairList;

  constructor() { }

  getHair(): Observable<hair[]> {
    return of (hairList)
  }
}
