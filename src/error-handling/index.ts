import { sampleFn } from './sample-func';

void (() => {
  console.log('START');

  const args = [100, -100];
  const results = args.map((arg) => sampleFn(arg));
  results.forEach((res) => {
    if (res.isOk()) console.log(res.val);
    else console.log(res.error);
  });

  console.log('DONE');
})();
