function uncamelize(str, separator) {

  if(typeof(separator) === "undefined") {
    separator = ' '
  }

  str = str.replace(/[A-Z]/g, letter => separator + letter.toLowerCase())

  return str.replace("/^" + separator + "/", '')
}
console.log(uncamelize('helloWorld'))
console.log(uncamelize('helloWorld','-'))
console.log(uncamelize('helloWorld','_'))



// ***************************** Without RegExp *****************************

function uncamelizeAnother(str, separator) {
  const map = {};
  let index = 0;
  map[index] = [];
  let result = ''
  let resultArray = [];

  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && str[i] === str[i].toUpperCase()) {
      index = i;
      map[index] = [];
    }
    if (i === 0) {
      map[index].push(str[i]);
    } else {
      map[index].push(str[i]);
    }
  }

  if(typeof(separator) === "undefined") {
    Object.keys(map).map(function (key) {
      resultArray = [...resultArray, ' ', ...map[key]];
      return resultArray;
    });
  } else {
    Object.keys(map).map(function (key) {
      resultArray = [...resultArray, separator, ...map[key]];
      return resultArray;
    });
  }

  if(separator === '_') {
    result = resultArray.join('').slice(1, resultArray.length)
    result = result[0].toUpperCase() + result.substr(1).toLowerCase()
  } else {
    result = resultArray.join('').slice(1, resultArray.length)
  }
  return result
}

console.log(uncamelizeAnother('helloWorld'));
console.log(uncamelizeAnother('helloWorld','-'));
console.log(uncamelizeAnother('helloWorld','_'));