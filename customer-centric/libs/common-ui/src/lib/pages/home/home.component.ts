import { Component } from '@angular/core';
import { IButton } from '../../components/button/button.interface';

@Component({
  selector: 'customer-centric-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  boton1: IButton = {
    color: 'primary',
    label: 'Boton 1',
  };
  boton2: IButton = {
    color: 'secondary',
    label: 'Boton ',
  };
  boton3: IButton = {
    color: 'tertiary',
    label: 'boton 3 ',
  };
  boton4: IButton = {
    color: 'primary',
    label: 'Boton 4',
  };
}
