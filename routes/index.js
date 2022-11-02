const express = require('express')
const router = express.Router()
const getCocktails = require('../controllers/cocktails')
const getCocktail = require('../controllers/cocktail')
const { getMyCocktails, addCocktail, getMyCocktail } = require('../controllers/mycocktails')


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


router.post('/mycocktails', (req, res, next) => {
	console.log(req.body);
	addCocktail(req.body)
	res.status(201).json({
	  message: 'Cocktail créé !'
	});
});


router.get('/mycocktails', function (req, res, next) {
	let cocktails = getMyCocktails()
	res.status(200).json(cocktails);
})

router.get('/mycocktail', function (req, res) {
	const { id } = req.query
	let drinks = []
	const drink = getMyCocktail(id)
	drinks.push(drink)
	console.log('id', id)
	console.log('drink', drink)
	console.log('drinks', drinks)
	let cocktailData = {}
	cocktailData.drinks = drinks
		if (!cocktailData) {
			res.status(400).send('Not found.')
		} else {
			res.status(200).json(cocktailData);
		}
})


module.exports = router