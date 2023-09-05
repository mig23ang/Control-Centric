import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[navbar]',
})
export class NavbarDirective implements OnInit {
  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    console.log("first")
  }
}
