import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { FooterComponent } from './nav/footer/footer.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
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
