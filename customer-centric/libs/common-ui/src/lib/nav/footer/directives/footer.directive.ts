import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[footer, footer-primary, footer-secondary]',
})
export class FooterDirective {
  constructor() {}
}
