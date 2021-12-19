function Account(bal) {
	this.bal = bal;
}
Account.prototype = new Object();
Account.prototype.deposit = (amt) => {
	try {
		if(amt <= 0) {
			throw new RangeError("Deposit cannot be negative or zero")
		} else {
			this.bal += amt; return amt;
		}
	} catch (e) {
		console.log(e);
		return -1;
	}
}
Account.prototype.withdraw = (amt) => {
	if(amt < 0) {
		return;
	} else if(amt > this.bal) {
		this.bal -= this.bal;
		return bal;
	}
	this.bal -= amt;
	return amt;
}

function IntAccount(bal, rate) {
  Account.call(this, bal); 
  this.rate = rate; 
}
IntAccount.prototype = new Account();
IntAccount.prototype.addInt = function() { 
  this.bal += (this.bal * this.rate);  return this.bal; 
}