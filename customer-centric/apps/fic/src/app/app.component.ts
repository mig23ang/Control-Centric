import { Component } from '@angular/core';
import { exampleClientes } from '@customer-centric/jarvis';
import { IButton } from 'libs/common-ui/src/lib/button/button.interface';

@Component({
  selector: 'customer-centric-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  botonIniciar: IButton = {
    color: 'secondary',
    label: 'Iniciar ahy',
  };
}
