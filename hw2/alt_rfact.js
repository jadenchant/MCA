var alt_rfact = ( function myfunt(n) {
	if (n < 0) 
    throw new RangeError("argument must be non-negative");
  if (n == 0)
    return 1;
  return n*myfunt(n-1);
})

console.log(alt_rfact(5));