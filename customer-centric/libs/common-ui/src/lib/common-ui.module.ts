import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipComponent } from './components/chip/chip.component';
import { TagComponent } from './components/tag/tag.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    MenuLateralComponent,
    HomeComponent,
    CheckboxComponent,
    ChipComponent,
    TagComponent,
    BreadcrumbComponent,
    TextInputComponent,
    DateTimePickerComponent,
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    MenuLateralComponent,
    HomeComponent,
    CheckboxComponent,
    ChipComponent,
    TagComponent,
    BreadcrumbComponent,
    TextInputComponent,
    DateTimePickerComponent,
  ],
})
export class CommonUiModule {}
