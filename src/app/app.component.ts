import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {hair} from "./shared/models/hair";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //here you make your hair objects and put them in an array
  title = 'Irene Hair Store';
  hairList: hair[] = [
    { id: 1, hairName: "box braid", hairType: "small", hairTexture: "kinky", color: false },
    { id: 2, hairName: "leave out", hairType: "flat iron", hairTexture: "natural", color: true },
    { id: 3, hairName: "foc lox", hairType: "middle", hairTexture: "plastic", color: false },
    { id: 4, hairName: "wig", hairType: "side part", hairTexture: "soft", color: true },
    { id: 5, hairName: "weave", hairType: "all back", hairTexture: "smooth", color: true },
    { id: 6, hairName: "boho", hairType: "goodness", hairTexture: "new", color: true }
  ];
}


