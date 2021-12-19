function div10(arr) {
	for(let i = 0; i < arr.length; ++i) {
		arr[i] /= 10;
	}
	return arr;
}

var arr = [50, 3, -18];
div10(arr);   // returns [5, .3, -1.8]
arr;          // returns [5, .3, -1.8]