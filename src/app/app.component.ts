import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {hair} from "./shared/models/hair";
import {NgForOf, NgIf} from "@angular/common";
import {HairListComponent} from "./hair-list/hair-list.component";
import {HairListItemComponent} from "./hair-list-item/hair-list-item.component";
import {hairList} from "./shared/mockData-hair";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, HairListComponent, HairListItemComponent, RouterLinkActive, RouterLink, MatToolbar, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //here you make your hair objects and put them in an array
  title = 'Irene Hair Store';


  protected readonly hairList = hairList;
}


