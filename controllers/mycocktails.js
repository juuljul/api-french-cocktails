const cocktailsData = require('../models/mycocktails')

function getMyCocktails() {
	let cocktails ={}
	cocktails.drinks = cocktailsData
	return cocktails
}

function addCocktail(newCocktail){
	cocktailsData.push(newCocktail)
}

function getMyCocktail(id) {
	return cocktailsData.find((cocktail => cocktail.strDrink === id))
}


module.exports = { getMyCocktails, addCocktail, getMyCocktail }
