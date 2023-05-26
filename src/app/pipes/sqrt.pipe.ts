import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrtOussama'
})
export class SqrtPipe implements PipeTransform {

  transform(val:number):number  {
    return Math.sqrt(val);
  }

}
