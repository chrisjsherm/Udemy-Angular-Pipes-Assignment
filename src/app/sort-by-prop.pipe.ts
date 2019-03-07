import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByProp'
})
export class SortByPropPipe implements PipeTransform {

  transform(value, prop?: string): any {
    if (prop) {
      return this.quickSortBasicProp(value, prop);
    }

    return this.quickSortBasic(value);
  }

  quickSortBasic = (arr) => {
    if (arr.length < 2) {
      return arr;
    }

    const pivotValue = arr[0];
    const lesser = [];
    const greater = [];

    for (let i = 1, length = arr.length; i < length; i++) {
      if (pivotValue < arr[i]) {
        greater.push(arr[i]);
      } else {
        lesser.push(arr[i]);
      }
    }

    return this.quickSortBasic(lesser).concat(pivotValue, this.quickSortBasic(greater));
  }

  quickSortBasicProp = (arr, prop) => {
    if (arr.length < 2) {
      return arr;
    }

    const pivotObj = arr[0];
    const lesser = [];
    const greater = [];

    for (let i = 1, length = arr.length; i < length; i++) {
      if (pivotObj[prop] < arr[i][prop]) {
        greater.push(arr[i]);
      } else {
        lesser.push(arr[i]);
      }
    }

    return this.quickSortBasicProp(lesser, prop)
      .concat(pivotObj, this.quickSortBasicProp(greater, prop));
  }
}
