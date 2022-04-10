import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightquote]'
})
export class LightquoteDirective {

  constructor( private highlight:ElementRef) { 
    highlight.nativeElement.style.backgroundColor = "crimson"
  }

}
