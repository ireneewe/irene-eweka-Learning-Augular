import {Component, Input} from '@angular/core';
import {hair} from "../shared/models/hair";
import {FormsModule} from "@angular/forms";
import {HairListItemComponent} from "../hair-list-item/hair-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-hair-list',
  standalone: true,
  imports: [
    FormsModule,
    HairListItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './hair-list.component.html',
  styleUrl: './hair-list.component.css'
})
export class HairListComponent {





}
