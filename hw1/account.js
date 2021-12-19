var acct = new Object({
  bal: 0,
  deposit: function(amt) { 
    try {
      if(amt <= 0) {
        throw new RangeError("Deposit must be positive");
      }
      this.bal += amt;

    } catch(e) {
      console.log(e);
    }
        return this.bal;
  }
});
