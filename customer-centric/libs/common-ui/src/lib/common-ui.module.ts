import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { PrimaryDirective } from './button/directives/primary.directive';
import { FooterComponent } from './nav/footer/footer.component';
import { NavbarDirective } from './nav/navbar/directives/navbar.directive';
import { FooterDirective } from './nav/footer/directives/footer.directive';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    NavbarComponent,
    PrimaryDirective,
    FooterComponent,
    FooterDirective,
    NavbarDirective,
    MenuLateralComponent,
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    MenuLateralComponent,
  ],
})
export class CommonUiModule {}
