function caseInsensitiveSearch(str1, str2) {
    let search_str = new RegExp(str2, 'ig');
    let result = str1.search(search_str);

    return (result > 0) ? 'Matched' : 'Not Matched';  
}

console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'))
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'))
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'))