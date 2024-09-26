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

  hairList: hair[] = [
    { id: 1, hairName: "box braid", hairType: "small", hairTexture: "kinky", color: false },
    { id: 2, hairName: "leave out", hairType: "flat iron", hairTexture: "natural", color: true },
    { id: 3, hairName: "foc lox", hairType: "middle", hairTexture: "plastic", color: false },
    { id: 4, hairName: "wig", hairType: "side part", hairTexture: "soft", color: true },
  ];




}
