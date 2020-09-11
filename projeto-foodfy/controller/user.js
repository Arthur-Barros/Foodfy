const data = require("../data.json");


exports.home = function(req,res){
    return res.render("users/home", { recipes: data.recipes});
}

exports.about = function(req,res){
    return res.render("users/about")
}

exports.recipes = function(req,res){
    return res.render("users/recipe", { recipes: data.recipes})
}

exports.show = function(req,res){
    
    const recipeID = req.params.id;

    const  recipe = data.recipes.find(function(recipe){
        return recipe.id == recipeID;
    });
    

    return res.render("users/recipe_details", {recipe: recipe} );

}