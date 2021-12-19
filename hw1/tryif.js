// tryif() 
// 1 argument: any number 
// Return: a string 'neg' if arg1 < 0,  'pos' if arg1 > 0, and 'zero' if arg1 is 0. 
function tryif(num) {
	if(num < 0) {
		return 'neg';
	} else if(num > 0) {
		return 'pos';
	}
	return 'zero';
}

console.log(tryif(6));
console.log(tryif(-6));
console.log(tryif(0));