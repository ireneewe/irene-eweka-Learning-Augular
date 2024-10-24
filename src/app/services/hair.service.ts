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
    return of (hairList);
  }
  addHair(newHair:hair): Observable<hair[]>{
    this.hair.push(newHair)
    return of (this.hair);
  }

  updateHair(updateHair: hair): Observable<hair[]>{
    const index = this.hair.findIndex(hairList => hairList.id === updateHair.id);
      if (index !== -1){
        this.hair[index] = updateHair;
      }
      return of (this.hair);
  }
  deleteHair(hairId: number ): Observable<hair[]>{
    this.hair = this.hair.filter(hairList => hairList.id !== hairId);
    return of(this.hair);
  }
  getHairById(hairId: number): Observable<hair | undefined>{
    const hair = this.hair.find(hairList => hairList.id === hairId);
    return of ();
}
  generateNewId(): number {
    return this.hair.length > 0 ? Math.max(...this.hair.map(hairList => hairList.id)) + 1 : 1;
  }


}
