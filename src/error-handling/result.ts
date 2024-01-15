export type Result<T, E extends Error> = NG<E> | OK<T>;

/**
 * 成功
 */
export class OK<T> {
  readonly val: T;

  constructor(val: T) {
    this.val = val;
  }

  /**
   * 成功
   * @template T
   * @returns {this is OK<T>} true
   */
  isOk(): this is OK<T> {
    return true;
  }

  /**
   * 失敗
   * @returns {this is NG<Error>} false
   */
  isNg(): this is NG<Error> {
    return false;
  }
}

/**
 * 失敗
 */
export class NG<E extends Error> {
  readonly error: E;

  constructor(error: E) {
    this.error = error;
  }

  /**
   * 成功
   * @template T
   * @returns {this is OK<T>} false
   */
  isOk(): this is OK<unknown> {
    return false;
  }

  /**
   * 失敗
   * @returns {this is NG<Error>} true
   */
  isNg(): this is NG<Error> {
    return true;
  }
}
