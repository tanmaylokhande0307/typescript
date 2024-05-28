const getFirstElement = (arr: number[]): number => {
  arr[0].toLowercase();
  return arr[0]
}

console.log(getFirstElement([1, 2, 3, 5]))
