function Dog(name, age) {
	this.name = name;
	this.age = age;
}

Dog.prototype = new Object();
Dog.prototype.birthday = function() {
	return ++this.age;
}
Dog.prototype.toString = function() {
	return this.name + " (" + this.age + ")";
}

function ShowDog(name, age, breed) {
	Dog.call(this, name, age);
	this.breed = breed;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.class = function() {
	return this.breed + ", " + this.age + " yrs";
}