import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { PrimaryDirective } from './button/directives/primary.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, NavbarComponent, PrimaryDirective],
  exports: [ButtonComponent, NavbarComponent],
})
export class CommonUiModule {}
