import { Pipe, PipeTransform } from '@angular/core';
import {hair} from "../shared/models/hair";

@Pipe({
  name: 'hairLength',
  standalone: true
})
export class HairLengthPipe implements PipeTransform {

  transform(hair: hair): string {
    return `${hair.hairName} ${hair.hairType}`
  }

}
