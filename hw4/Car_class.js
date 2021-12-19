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