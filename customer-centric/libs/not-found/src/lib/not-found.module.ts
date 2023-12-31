import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NotFoundRouteComponent } from './notFoundRoute/not-found-route.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NotFoundRouteComponent }]),
  ],
  declarations: [NotFoundRouteComponent],
})
export class NotFoundModule {}
