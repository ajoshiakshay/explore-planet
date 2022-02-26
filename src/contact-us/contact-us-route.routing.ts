import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';

const routes: Routes = [
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: '',
    component: ContactUsComponent,
    pathMatch: 'full',
  },
];

export const ContactUsRouteRoutes = RouterModule.forChild(routes);
