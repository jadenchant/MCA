function sumfirst_f(num) {
	let final = 0;
	for(let i = 1; i <= num; ++i) {
		final += i;
	}
	return final;
}

console.log(sumfirst_f(4))
console.log(sumfirst_f(10))      // expect return value of 55
console.log(sumfirst_f(-3))