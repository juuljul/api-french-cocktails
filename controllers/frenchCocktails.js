const frenchCocktails = require('../models/FrenchCocktails')

exports.getFrenchCocktails = (req, res) =>  {
	let cocktails ={}
	cocktails.drinks = frenchCocktails
    res.status(200).json(cocktails);
}

exports.getOneFrenchCocktail = (req, res) =>  {
	const { id } = req.query
	let drinks = []
	const drink = frenchCocktails.find((cocktail => cocktail.idDrink === id))
	drinks.push(drink)
	let cocktailData = {}
	cocktailData.drinks = drinks
    if (!cocktailData) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cocktailData);
    }
}