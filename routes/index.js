const express = require('express')
const router = express.Router()

const myCocktailsCtrl = require('../controllers/myCocktails');
const frenchCocktailsCtrl = require('../controllers/frenchCocktails');

router.get('/cocktail', frenchCocktailsCtrl.getOneFrenchCocktail)
router.get('/cocktails', frenchCocktailsCtrl.getFrenchCocktails)

router.post('/mycocktails', myCocktailsCtrl.createCocktail)
router.get('/mycocktails', myCocktailsCtrl.getMyCocktails)
router.get('/mycocktail', myCocktailsCtrl.getOneOfMyCocktails)

module.exports = router