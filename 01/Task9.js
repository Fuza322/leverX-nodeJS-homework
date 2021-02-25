function transfornArr(arr, callback) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(arr.filter(el => !!el)), 5000)
  })

promise
  .then(result => callback(result))
  .catch(new Error('Somthing wrong...'))
}

transfornArr([1, null, -4, , 3], (text) => console.log(text))