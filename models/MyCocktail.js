const mongoose = require('mongoose');

const myCocktailSchema = mongoose.Schema({
  strDrink: { type: String, required: true },
  strInstructions: { type: String, required: true },
  strIngredient1: { type: String, required: true },
  strMeasure1: { type: String, required: true },
});

module.exports = mongoose.model('myCocktail', myCocktailSchema);

