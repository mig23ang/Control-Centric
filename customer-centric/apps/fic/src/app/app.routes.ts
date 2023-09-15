import { Route } from '@angular/router';
import { HomeComponent } from '@customer-centric/common-ui';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'fic',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '**',
    loadChildren: () => {
      return import('@customer-centric/not-found').then(
        (m) => m.NotFoundModule
      );
    },
  },
];
