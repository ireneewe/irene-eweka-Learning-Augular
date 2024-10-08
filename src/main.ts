import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {HairListComponent} from "./app/hair-list/hair-list.component";
import {HairListItemComponent} from "./app/hair-list-item/hair-list-item.component";


const routes: Routes =[
  {path: 'hair', component:HairListComponent},
  {path: 'hair/:id', component: HairListItemComponent}
]

bootstrapApplication(AppComponent, {
 providers:[provideRouter(routes)]
})
  .catch((err) => console.error(err));
