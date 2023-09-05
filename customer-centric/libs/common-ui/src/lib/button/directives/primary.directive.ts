/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[primary, secondary]',
})
export class PrimaryDirective implements OnInit {

  constructor(private readonly el: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    console.log("first")
  }
}
