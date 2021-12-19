function random_array(min, max, len) {
	try{
		if(len <= 0) {
			throw new RangeError("Array must have a length greater than 0");
		}	else if(min >= max) {
			throw new RangeError("Max value must be greater than or equal to the min value")
		}

		let arr = [len];
		min = Math.ceil(min);
		max = Math.floor(max);

		function random_num() {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		for(let i = 0; i < len; ++i) {
			arr[i] = random_num();
		}

		return arr;

	} catch (e) {
		console.log(e);
		return -1;
	}
}

console.log(random_array(2,7,5));
console.log(random_array(-8,7,9));
// console.log(random_array(2,-2,5));
// console.log(random_array(2,7,0));