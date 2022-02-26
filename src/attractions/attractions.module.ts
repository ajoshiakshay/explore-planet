import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttractionsComponent } from './attractions.component';
import { AttractionsRoutes } from './attractions.routing';

@NgModule({
  imports: [
    CommonModule,
    AttractionsRoutes,
  ],
  declarations: [AttractionsComponent]
})
export class AttractionsModule { }
