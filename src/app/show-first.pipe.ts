
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showFirst'
})

export class ShowFirstPipe implements PipeTransform {

  transform(array: any, limit: number) {
    console.log('limit: ' + limit);
    console.log('array: ', array);
    if (limit > 0) {
      return array.splice(0, limit);
    }
    return array;
  }

}
