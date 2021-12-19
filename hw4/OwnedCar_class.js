class Car {
	constructor(model, year) {
		this.model = model;
		this.year = year;
	}
	make() {
		return this.model.replace(/\s[\w].*/, "");
	}
	toString() {
		return "\'" + String(this.year).substring(2) + " " + this.model;
	}
}

class OwnedCar extends Car {
	constructor(model, year, name) {
		super(model, year);
		this.name = name;
	}
	first() {
		return this.name.replace(/\s[\w].*/, "");
	}
	last() {
		return this.name.replace(/[\w].*\s/, "");
	}
	toString() {
		return super.toString() + '(' + this.name + ')';
	}
}