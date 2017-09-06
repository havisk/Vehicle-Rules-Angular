import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionFilter'
})
export class RegionFilterPipe implements PipeTransform {

  transform(value: any, regionInput: string, propName: string): any {
    if (value.length === 0 || regionInput === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === regionInput || item[propName].toLowerCase() === regionInput) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
