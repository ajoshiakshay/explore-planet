import { Routes, RouterModule } from '@angular/router';
import { AttractionsComponent } from './attractions.component';

const routes: Routes = [
  {
    path: 'attractions',
    component: AttractionsComponent,
  },
  {
    path: '',
    component: AttractionsComponent,
    pathMatch: 'full',
  },
];

export const AttractionsRoutes = RouterModule.forChild(routes);
