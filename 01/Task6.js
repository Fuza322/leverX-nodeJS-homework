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