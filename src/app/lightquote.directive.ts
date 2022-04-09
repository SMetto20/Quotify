import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightquote]'
})
export class LightquoteDirective {

  constructor( highlight:ElementRef) { }

}
