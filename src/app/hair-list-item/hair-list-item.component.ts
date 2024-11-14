import {Component, Input, OnInit} from '@angular/core';
import {hair} from "../shared/models/hair";
import {ActivatedRoute, Router} from "@angular/router";
import {HairService} from "../services/hair.service";
import {hairList} from "../shared/mockData-hair";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-hair-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './hair-list-item.component.html',
  styleUrl: './hair-list-item.component.css'
})
export class HairListItemComponent implements OnInit{
  hair: any; // Declare the hair variable here

  constructor(
    private route: ActivatedRoute,
    private hairService: HairService // Inject the service if you need to fetch data
  ) {}

  ngOnInit(): void {
    // Fetch the id from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hair = this.hairService.getHairById(+id); // Fetch hair data from a service (example)
    }
  }
}
