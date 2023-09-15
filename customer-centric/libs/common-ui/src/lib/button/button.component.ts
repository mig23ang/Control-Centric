import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButton } from './button.interface';

@Component({
  selector: 'customer-centric-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() libClick = new EventEmitter();
  @Input() custom: IButton = {
    color: 'primary',
    label: 'ButtonDefault',
  };

  sendEvent(): void {
    this.libClick.emit(' ');
  }
}
