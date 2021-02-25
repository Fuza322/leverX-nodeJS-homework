function transfornArr(arr) {

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(arr.filter(el => !!el)), 6000)
  })
}

transfornArr([1, null, -4, , 3])
  .then(result => console.log(result))
  .catch(new Error('Somthing wrong'))