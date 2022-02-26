import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from 'src/contact-us/contact-us.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'contactus',
        loadChildren: () => import('./../contact-us/contact-us.module').then((m) => m.ContactUsModule)
      },
      {
        path: 'attractions',
        loadChildren: () => import('./../attractions/attractions.module').then((m) => m.AttractionsModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
