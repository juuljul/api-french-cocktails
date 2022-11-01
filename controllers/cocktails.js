const cocktailsData = require('../models/cocktails')

function getCocktails() {
	let cocktails ={}
	cocktails.drinks = cocktailsData
	return cocktails
}

module.exports = getCocktails