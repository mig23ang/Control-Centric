import { Component, Input } from '@angular/core';

@Component({
  selector: 'control-centric-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() titulo = "";
}