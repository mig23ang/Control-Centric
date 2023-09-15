import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-centric-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() links: string[] = [];

  @Input() proyecto = 'xxx';
}
