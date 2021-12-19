// fact() 
// 1 argument: a non-negative integer 
// Return: integer, the product of integers from 1 up to arg1 inclusive
function fact(n) {
	var final = 1;
	for(let i = 1; i <= n; ++i) {
		final *= i;
	}
	return final;
}

console.log(fact(4));
console.log(fact(1));
console.log(fact(7));
console.log(fact(0));
console.log(fact(3.14));