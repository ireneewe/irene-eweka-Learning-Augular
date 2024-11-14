import {Component, Input, OnInit} from '@angular/core';
import {hair} from "../shared/models/hair";
import {FormsModule} from "@angular/forms";
import {HairListItemComponent} from "../hair-list-item/hair-list-item.component";
import {CurrencyPipe, LowerCasePipe, NgClass, NgForOf, UpperCasePipe} from "@angular/common";
import {hairList} from "../shared/mockData-hair";
import {HairService} from "../services/hair.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-hair-list',
  standalone: true,
  imports: [
    FormsModule,
    HairListItemComponent,
    NgForOf,
    NgClass,
    RouterLink,
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
  ],
  templateUrl: './hair-list.component.html',
  styleUrl: './hair-list.component.css'
})
export class HairListComponent implements OnInit{

  //deleted: boolean = true;

  // displayColomus:String[]=['id', 'name', 'texture', 'type'];
  hairList: hair[] =[];

  constructor(private hairService: HairService,
              private router : Router) {
  }

  ngOnInit() {
    this.hairService.getHair().subscribe({
      next: (data: hair[]) => this.hairList = data,
      error:err => console.error("error finding hair", err),
      complete:() => console.log("finding completed ")
    })
  }

//redirect to the form
  onEdit(): void {
    this.router.navigate(['/modify-hair']);
  }

  onDelete(hairId: number): void {

    this.hairService.deleteHair(hairId);
    }


  selectedHairItem?: hair;
  selectedHair(hair: hair): void{
    this.selectedHairItem = hair;
  }

}
