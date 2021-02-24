function flatAndSort(arr) {
  return arr.flat(Infinity).sort( (a, b) => a - b)
}

console.log(flatAndSort([1, 2, 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]]))