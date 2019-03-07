import { ReverseStringPipe } from './reverse-string.pipe';

describe('ReverseStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('hello')).toBe('olleh');
  });
});
