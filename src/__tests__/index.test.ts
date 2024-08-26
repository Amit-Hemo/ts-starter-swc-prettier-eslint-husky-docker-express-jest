import { sum } from '../index';

describe('sum', () => {
  it('should print the correct text from the file', async () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
