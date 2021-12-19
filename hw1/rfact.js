// rfact() 
// 1 argument: a non-negative integer 
// Return: integer, the product of integers from 1 up to arg1 inclusive   
function rfact(n) {
	if(n <= 1) {
		return n;
	} else if(n == 0) {
		return 1;
	}
	return n * rfact(n - 1);
}

console.log(rfact(4));
console.log(rfact(1));
console.log(rfact(7));
console.log(rfact(0));
console.log(rfact(3.14));