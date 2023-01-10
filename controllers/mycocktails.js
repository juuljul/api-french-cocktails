const MyCocktail = require('../models/MyCocktail');


exports.createCocktail = (req, res, next) => {

    const myCocktail = new MyCocktail({
		strDrink: req.body.strDrink,
		strInstructions: req.body.strInstructions,
	});

	for (let i=1; i<7; i++){
		const strIngredient = "strIngredient"+i
		const strMeasure = "strMeasure"+i
		myCocktail[strIngredient] = req.body[strIngredient]
		myCocktail[strMeasure] = req.body[strMeasure]
	}


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
};


exports.getMyCocktails = (req, res, next) => {
	MyCocktail.find().then(
		(mycocktails) => {
		  let cocktails ={}
		  cocktails.drinks = mycocktails
		  res.status(200).json(cocktails);
		}
	  ).catch(
		(error) => {
		  res.status(400).json({
			error: error
		  });
		}
	  );
};

exports.getOneOfMyCocktails = (req, res, next) => {
	const { id } = req.query
	MyCocktail.findOne({
		strDrink: id
	  }).then(
		(drink) => {
		  let drinks = []
		  drinks.push(drink)
		  let cocktail = {}
		  cocktail.drinks = drinks
		  res.status(200).json(cocktail);
		}
	  ).catch(
		(error) => {
		  res.status(404).json({
			error: error
		  });
		}
	  );
};
