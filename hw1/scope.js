function f(a, b) {   // scope of a, b, v, g begins here
	v;    // returns  undefined
  // l;    // throws ReferenceError

  g(7); // prints 7, returns 8 (if line 3 was commented out)
  var v  = 10;
  v;    // returns 10
  {
    v;  // returns 10
	    g(7); // prints 7, returns 8
	    // l;  // throws ReferenceError
	    
     let l = 20;      // (if lines 3 and 11 were commented out)
	    l;  // returns 20
	 }                  // scope of l ends here
	  // l;    // throws ReferenceError
	
	  // (computation continues if lines 3, 11, and 16 were commented out:) 
	function g(a) {    // scope of a different  a  begins here
	  console.log(a);  // prints value of the most local a
	  v;  // returns undefined
    var v = 30;
    v;  // returns 30
	  return a+1;
  }     // scope of g's argument  a  ends here
	v;    // returns 10
  return a + g(b);   // uses f's arguments  a  and  b
	}       // scope of a, b, v, g ends here

f(1, 2);  // returns 4 (=1+3), if lines 3, 11, 16 commented out