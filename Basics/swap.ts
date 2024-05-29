const swap = <T>(a: T, b: T): [T, T] => {
  return [b, a];
};

const a = swap(2, 3);
console.log(a);
