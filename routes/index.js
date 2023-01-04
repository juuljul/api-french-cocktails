const express = require('express')
const router = express.Router()
const getCocktails = require('../controllers/cocktails')
const getCocktail = require('../controllers/cocktail')
const { getMyCocktails, addCocktail, getMyCocktail } = require('../controllers/mycocktails')

const MyCocktail = require('../models/MyCocktail');


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
	const myCocktail = new MyCocktail({
		strDrink: req.body.strDrink,
		strInstructions: req.body.strInstructions,
		strIngredient1: req.body.strIngredient1,
		strMeasure1: req.body.strMeasure1
	});
	myCocktail.save().then(
	() => {
		res.status(201).json({
		message: 'Post saved successfully!'
		});
	}
	).catch(
	(error) => {
		res.status(400).json({
		error: error
		});
	}
	);
});




router.get('/mycocktails', function (req, res, next) {
	MyCocktail.find().then(
		(mycocktails) => {
		  let cocktails ={}
		  cocktails.drinks = mycocktails
		  res.status(200).json(cocktails);
		  console.log(cocktails)
		}
	  ).catch(
		(error) => {
		  res.status(400).json({
			error: error
		  });
		}
	  );
})



router.get('/mycocktail', function (req, res) {
	const { id } = req.query
	let drinks = []
	const drink = getMyCocktail(id)
	drinks.push(drink)
	let cocktailData = {}
	cocktailData.drinks = drinks
		if (!cocktailData) {
			res.status(400).send('Not found.')
		} else {
			res.status(200).json(cocktailData);
		}
})


module.exports = router