import { SortPipe } from '@app/shared/pipes/sort.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });
});
