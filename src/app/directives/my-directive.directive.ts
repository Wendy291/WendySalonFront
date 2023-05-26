import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[oussamaDirective]'
})
export class MyDirectiveDirective {

  constructor(element:ElementRef) {
     element.nativeElement.innerText = "Hello ";
   }

}
