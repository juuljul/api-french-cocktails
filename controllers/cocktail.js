const cocktailsData = require('../models/cocktails')

function getCocktail(id) {
	return cocktailsData.find((cocktail => cocktail.idDrink === id))
}

module.exports = getCocktail