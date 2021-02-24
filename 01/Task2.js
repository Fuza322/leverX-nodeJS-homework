function difference(arr1, arr2) {
  let result = []

  arr1 = arr1.concat(arr2).flat(Infinity)
  // console.log(arr1)
  for (let el of arr1) {
    if (!result.includes(el)) {
      result.push(el)
    }
  }

  return result.sort( (a, b) => a - b).map( el => (el).toString())
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]))
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))
console.log(difference([1, 2, 3], [100, 2, 1, 10]))