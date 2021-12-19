function Account(init_bal) {
  this.bal = init_bal;
  this.deposit = function (amt) { this.bal += amt; return amt; }
}
