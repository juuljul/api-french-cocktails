const mongoose = require('mongoose');

const myCocktailSchema = mongoose.Schema({
  strDrink: { type: String, required: true },
  strInstructions: { type: String, required: true },
  strIngredient1: { type: String, required: true },
  strMeasure1: { type: String, required: true },
  strIngredient2: { type: String },
  strMeasure2: { type: String },
  strIngredient3: { type: String },
  strMeasure3: { type: String },
  strIngredient4: { type: String },
  strMeasure4: { type: String },
  strIngredient5: { type: String },
  strMeasure5: { type: String },
  strIngredient6: { type: String },
  strMeasure6: { type: String }
});

module.exports = mongoose.model('myCocktail', myCocktailSchema);

