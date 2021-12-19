var series = (n) => { if (n > 0) return n + series(n-1); else return 0} ;

console.log(series(3));
console.log(series(10));