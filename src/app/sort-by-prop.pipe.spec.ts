import { SortByPropPipe } from './sort-by-prop.pipe';

describe('SortByPropPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPropPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform([9, 2, 5, 6, 4, 3, 7, 10, 1, 8], null))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(pipe.transform([
      { value: 9 }, { value: 2 }, { value: 5 }, { value: 6 }, { value: 4 }
    ], 'value'))
      .toEqual([
        { value: 2 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 9 }
      ]);
  });
});
