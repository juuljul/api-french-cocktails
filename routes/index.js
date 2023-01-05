const express = require('express')
const router = express.Router()
const getCocktails = require('../controllers/cocktails')
const getCocktail = require('../controllers/cocktail')

const myCocktailsCtrl = require('../controllers/myCocktails');

router.get('/cocktail', function (req, res) {
	const { id } = req.query
	let drinks = []
	const drink = getCocktail(id)
	drinks.push(drink)
	let cocktailData = {}
	cocktailData.drinks = drinks
		if (!cocktailData) {
			res.status(400).send('Not found.')
		} else {
			// res.send({ cocktailData })
			res.status(200).json(cocktailData);
		}
})

router.get('/cocktails', function (req, res, next) {
	let cocktails = getCocktails()
	res.status(200).json(cocktails);
})

router.post('/mycocktails', myCocktailsCtrl.createCocktail)
router.get('/mycocktails', myCocktailsCtrl.getMyCocktails)
router.get('/mycocktail', myCocktailsCtrl.getOneOfMyCocktails)

module.exports = router