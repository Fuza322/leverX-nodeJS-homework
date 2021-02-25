function findSubString(str, subStr){
    return str.split(subStr).length - 1;
}

console.log(findSubString('test|testTest test testtestt', 'test'))