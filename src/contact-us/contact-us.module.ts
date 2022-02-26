import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRouteRoutes } from './contact-us-route.routing';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRouteRoutes
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
