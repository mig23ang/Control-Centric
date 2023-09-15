import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'arrieros',
  },
  {
    path: 'fic',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '**',
    loadChildren: () =>{
      return import('@customer-centric/not-found').then(
        (m) => m.NotFoundModule
      );
    }
  }
];
