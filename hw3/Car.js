function Car(model, year) {
	this.model = model;
	this.year = year;
}

Car.prototype = new Object();
Car.prototype.make = function() {
	return this.model.replace(/\s[\w].*/, "");
};
Car.prototype.toString = function() {
	return "\'" + String(this.year).substring(2) + " " + this.model;
};