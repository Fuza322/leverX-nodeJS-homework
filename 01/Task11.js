function transformArr(arr1, arr2) {

  return [
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(arr1.filter(el => !!el)), 1000)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(arr2.filter(el => !!el)), 4000)
    })
  ]
}

for (let promis of transformArr([1, null, -4, , 3], [1, ,-4])) {
  promis.then(result => console.log(result))
}