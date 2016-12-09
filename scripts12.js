function Phone (brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("Make it your phone " + this.brand + ", price is " + this.price + ", and the color is " + this.color + ".");
}

var iPhone6S = new Phone("Apple", "silver", 2250);
var SamsungGalaxyS6 = new Phone("Samsung", "gold", 1500);
var OnePlusOne = new Phone("Microsoft", "red", 1800);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();