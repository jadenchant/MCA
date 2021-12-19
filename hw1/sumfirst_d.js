function sumfirst_d(num) {
	let final = 0;
	let i = 0;
	do {
		final += i;
		++i;
	} while (i <= num)
	return final;
}

console.log("The call sumfirst_w(4) returns " + sumfirst_d(4))
console.log("The call sumfirst_w(10) returns " + sumfirst_d(10))
console.log("The call sumfirst_w(0) returns " + sumfirst_d(0))
console.log("The call sumfirst_w(-3) returns " + sumfirst_d(-3))