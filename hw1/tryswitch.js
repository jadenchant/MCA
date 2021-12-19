// tryswitch() 
// 1 argument: any number 
// Return: a string 'neg' if arg1 < 0,  'pos' if arg1 > 0, and 'zero' if arg1 is 0. 
function tryswitch(num) {
	switch(true) {
		case(num < 0):
			return 'neg';
		case(num > 0):
			return 'pos';
		default:
			return 'zero';
	}
}

console.log(tryswitch(6));
console.log(tryswitch(-6));
console.log(tryswitch(0));