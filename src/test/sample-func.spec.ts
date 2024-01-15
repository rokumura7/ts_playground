import { sampleFn } from '@/error-handling/sample-func';

describe('sampleFn', () => {
  it('returns OK', () => {
    const res = sampleFn(100);
    expect(res.isOk()).toBeTruthy();
    expect(res.isNg()).not.toBeTruthy();
  });
  it('returns NG', () => {
    const res = sampleFn(-100);
    expect(res.isOk()).not.toBeTruthy();
    expect(res.isNg()).toBeTruthy();
  });
});
