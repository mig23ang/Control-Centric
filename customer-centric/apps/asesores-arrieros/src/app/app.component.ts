import { Component } from '@angular/core';
import { exampleClientes } from '@customer-centric/jarvis';
@Component({
  selector: 'customer-centric-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clientes = exampleClientes;
}
