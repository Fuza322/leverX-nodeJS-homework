const objToChagnePropsAndValues = {
  firstProp: 'test',
  secondProp: true,
  thirdProp: 3
};

function swapPropAndValues(obj) {
  const res = {}

  Object.keys(obj).forEach(value => {
    let key = obj[value]
    res[key] = value
  })
  return res
}

console.log(swapPropAndValues(objToChagnePropsAndValues))