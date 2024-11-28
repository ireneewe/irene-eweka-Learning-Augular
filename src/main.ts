import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {HairListComponent} from "./app/hair-list/hair-list.component";
import {importProvidersFrom} from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const routes: Routes =[
  {path:'', redirectTo: '/hair', pathMatch: 'full'},
  {path: 'hair', component:HairListComponent},
  {path:  'hair/:id',
      loadComponent: () =>
        import('./app/hair-list-item/hair-list-item.component').then(m => m.HairListItemComponent) }, //Lazy Loaded
  { path: 'modify-hair',
    loadComponent: () =>
      import('./app/Modify-hair/modify-hair.component').then(m => m.ModifyHairComponent) },
  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];

bootstrapApplication(AppComponent, {
 providers:[
   provideRouter(routes),
 importProvidersFrom(), provideAnimationsAsync()]
})
  .catch((err) => console.error(err));
