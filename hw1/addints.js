// addints() 
// 2 arguments: integers such that arg1 <= arg2 
// Return: integer, the sum of integers from arg1 to arg2 inclusive   
function addints(n1, n2) {
	var sum = 0;
	if(n1 == n2) {
		sum = n1 + n2;
	} else {
		while(n1 <= n2) {
			sum += n1;
			console.log(sum);
			++n1;
		}	
	}
	
	return sum;
}

addints(3,7);
addints(2,2);
