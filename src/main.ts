import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {HairListComponent} from "./app/hair-list/hair-list.component";
import {HairListItemComponent} from "./app/hair-list-item/hair-list-item.component";
import {ModifyHairComponent} from "./app/Modify-hair/modify-hair.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes =[
  {path:'', redirectTo: '/hair', pathMatch: 'full'},
  {path: 'hair', component:HairListComponent},
  {path: 'hair/:id', component: HairListItemComponent},
  {path: 'modify-hair', component: ModifyHairComponent},
  {path:"**", component:PageNotFoundComponent} //error route
]

bootstrapApplication(AppComponent, {
 providers:[provideRouter(routes)]
})
  .catch((err) => console.error(err));
