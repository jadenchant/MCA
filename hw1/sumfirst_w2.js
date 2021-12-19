function sumfirst_w(num) {
	let final = 0;
	let i = 1;
	while(i <= num) {
		final += i;
		++i;
	}
	return final;
}

console.log("The call sumfirst_w(4) returns " + sumfirst_w(4))
console.log("The call sumfirst_w(10) returns " + sumfirst_w(10))
console.log("The call sumfirst_w(0) returns " + sumfirst_w(0))
console.log("The call sumfirst_w(-3) returns " + sumfirst_w(-3))