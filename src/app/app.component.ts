import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {hair} from "./shared/models/hair";
import {NgForOf, NgIf} from "@angular/common";
import {HairListComponent} from "./hair-list/hair-list.component";
import {HairListItemComponent} from "./hair-list-item/hair-list-item.component";
import {hairList} from "./shared/mockData-hair";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, HairListComponent, HairListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //here you make your hair objects and put them in an array
  title = 'Irene Hair Store';


  protected readonly hairList = hairList;
}


