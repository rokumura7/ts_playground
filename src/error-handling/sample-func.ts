import { NG, OK, type Result } from './result';

/**
 * 与えられた数字をそのまま返す
 * ただし、0未満の場合NG
 * @param {number} x - 数字
 * @returns {Result<number, Error>} 結果
 */
export const sampleFn = (x: number): Result<number, Error> => {
  if (x < 0) return new NG(new Error(`引数「${x}」が 0 より低いです`));
  return new OK(x);
};
