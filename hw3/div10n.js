function div10n(arr) {
	for(let i = 0; i < arr.length; ++i) {
		if(typeof arr[i] === "number") {
			arr[i] /= 10;
		}
	}
	return arr;
}

var arr = [50, 'cat', [10,20], -18];
div10n(arr);   // returns [5, 'cat', [10,20], -1.8]
arr;          // returns [5, 'cat', [10,20], -1.8]
