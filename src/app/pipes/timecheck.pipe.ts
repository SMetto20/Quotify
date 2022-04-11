import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecheck'
})
export class TimecheckPipe implements PipeTransform {
  
  transform(value: unknown, ...args: unknown[]): unknown {
    return  new Date();
  }

}
