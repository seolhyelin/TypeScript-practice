function createPromise<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}
createPromise<string>("1", 100).then((v) => console.log());

function createTuple2<T, U>(v: T, v2: U): [T, U] {
  return [v, v2];
}
const t1 = createTuple2("user1", 1000);
