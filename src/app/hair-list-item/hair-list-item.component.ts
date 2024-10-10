import {Component, Input, OnInit} from '@angular/core';
import {hair} from "../shared/models/hair";
import {ActivatedRoute, Router} from "@angular/router";
import {HairService} from "../services/hair.service";
import {hairList} from "../shared/mockData-hair";


@Component({
  selector: 'app-hair-list-item',
  standalone: true,
  imports: [],
  templateUrl: './hair-list-item.component.html',
  styleUrl: './hair-list-item.component.css'
})
export class HairListItemComponent {
  /*hair: hair[]; //The student to display
  hairs: hair[] = [];// to store the list of students
  currentIndex: number = 0


  constructor(
    private route: ActivatedRoute,
    private hairService: HairService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hairService.getHair().subscribe(hairList => {
      this.hair = hairList;
  }*/
}
