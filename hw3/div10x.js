function div10x(arr) {
	try {
		for(let i = 0; i <arr.length; ++i) {
			if(typeof arr[i] != "number") {
				throw new TypeError("arr[" + i + "] is not a number type, it is a " + typeof arr[i]);
				return;
			} else {
				arr[i] /= 10;
			}
		}
		return arr;
	} catch (e) {
		console.log(e);
	}
}

var arr = [50, 1, -18];
div10x(arr);   // returns [5, .1, -1.8]
arr[1] = 'cat';
arr;           // returns [5, 'cat', -1.8]
div10x(arr);   // throws a TypeError exception