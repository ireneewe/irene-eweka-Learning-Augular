import { HairLengthPipe } from './hair-length.pipe';

describe('HairLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new HairLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
