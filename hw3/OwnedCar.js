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

function OwnedCar(model, year, name) {
	Car.call(this, model, year);
	this.name = name;
}

OwnedCar.prototype = new Car();
OwnedCar.prototype.first = function() {
	return this.name.replace(/\s[\w].*/, "");
};
OwnedCar.prototype.last = function() {
	return this.name.replace(/[\w].*\s/, "");
};
OwnedCar.prototype.toString = function() {
	return Car.prototype.toString.call(this) + '(' + this.name + ')';
}