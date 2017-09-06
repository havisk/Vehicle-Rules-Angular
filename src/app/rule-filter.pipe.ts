import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruleFilter'
})

export class RuleFilterPipe implements PipeTransform {

  transform(value: any, filterInput: string, propName: string): any {
    if (value.length === 0 || filterInput === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterInput || item[propName].toLowerCase() === filterInput) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
