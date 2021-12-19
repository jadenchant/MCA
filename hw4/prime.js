function isPrime(num) {
	try {
		if(num <= 0) {
			throw new RangeError("Number has to be greater than 0");
		} else if(num == 1) {
			return false;
		} else if(num == 2) {
			return true;
		}
		for(let i = 2; i < num; ++i) {
			if(num % i == 0) {
				return false;
			}
		}
		return true;
	} catch (e) {
		console.log(e);
	}
}

console.log(isPrime(2))
console.log(isPrime(6))
console.log(isPrime(13))