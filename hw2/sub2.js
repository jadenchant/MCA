function sub2(str) {
	return str.replace(/e+/g, 'E').replace(/i+/g, 'I');
}

console.log(sub2("I keep wanting to see skiing in Hawaiiiii!"));