import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isfilterable'
})
export class IsfilterablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
