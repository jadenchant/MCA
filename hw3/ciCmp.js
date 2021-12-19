function ciCmp(str1, str2) {
	let strl1 = str1.toLowerCase();
	let strl2 = str2.toLowerCase();
	if(strl1 < strl2) {
		return -1;
	} else if(strl2 < strl1) {
		return 1;
	} else {
		return 0;
	}
}
