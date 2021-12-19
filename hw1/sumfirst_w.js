function sumfirst_w(num) {
	let final = 0;
	let i = 1;
	while(i <= num) {
		final += i;
		++i;
	}
	return final;
}

console.log(sumfirst_w(4))
console.log(sumfirst_w(10))      // expect return value of 55
console.log(sumfirst_w(-3))