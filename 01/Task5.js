let obj = {
  firstProp: 'test',
  secondProp: 7,
  thirdProp: true,
  }
let result = Object.keys(obj).map((key) => [key, obj[key]]);

console.log(result);