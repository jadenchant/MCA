var alt_fact = (n) => {
  if (n < 0) 
    throw new RangeError("argument must be non-negative");
  var prod = 1;
  for (let i = 1; i <= n; i++)
    prod *= i;
  return prod;
}

console.log(alt_fact(5));