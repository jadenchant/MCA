function Book(theTitle, theAuthor, thePrice) {
	this.title = theTitle;
	this.author = theAuthor;
	if(thePrice < 0) {
		throw new RangeError('price cannot be negative');
		return;
	} else {
		this.price = thePrice;
	}
}