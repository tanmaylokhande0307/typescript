const getFirstElement = (arr: (string | number)[]) => {
  return arr[0]
}

const a = getFirstElement([1, 2, 3, 4, 5])
const b = getFirstElement(["One", "Two", "Three"])

console.log(a, b)
