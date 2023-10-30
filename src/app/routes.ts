import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];