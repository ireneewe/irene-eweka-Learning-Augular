import {Component, Input} from '@angular/core';
import {hair} from "../shared/models/hair";


@Component({
  selector: 'app-hair-list-item',
  standalone: true,
  imports: [],
  templateUrl: './hair-list-item.component.html',
  styleUrl: './hair-list-item.component.css'
})
export class HairListItemComponent {
 @Input() hairI?: hair;
}
