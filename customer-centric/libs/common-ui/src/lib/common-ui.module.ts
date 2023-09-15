import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    MenuLateralComponent,
    HomeComponent,
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    MenuLateralComponent,
    HomeComponent,
  ],
})
export class CommonUiModule {}
