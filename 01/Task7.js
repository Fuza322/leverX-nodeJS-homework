function countSubStr(ititialStr, str) {
  return (ititialStr.match(new RegExp(str, 'g')) || []).length
}

console.log(countSubStr('test|testTest test', 'test'))