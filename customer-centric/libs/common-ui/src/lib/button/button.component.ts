import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-centric-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() titulo = " ";

}