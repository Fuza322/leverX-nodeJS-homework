function fibonacci(n) {
	let arr = [0, 1]
	
	for (let i = 2; i <= n; i++) {
		let prev1 = arr[i - 1]
		let prev2 = arr[i - 2]
		arr.push(prev1 + prev2)
	}
  // console.log(arr)
  let result = arr.filter(el => el < n)

	return result
}

console.log(fibonacci(8))
console.log(fibonacci(610))