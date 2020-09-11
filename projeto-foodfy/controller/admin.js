const fs = require("fs");
const data = require("../data.json");

exports.index = function(req,res){


    return res.render("admins/index", { recipes: data.recipes});
}


exports.create = function(req, res){
    return res.render("admins/create");
}


exports.post = function(req,res){
    const keys = Object.keys(req.body);
    for(key of keys){
        if( req.body[key] == ""){
            return res.send(" Please, fill all field !");
        }
    }

    let id = 1;

    const lastRecipe = data.recipes[data.recipes.length -1];
    
    if(lastRecipe){
        id = lastRecipe.id + 1;
    }

    const foundRecipes = req.body;

    data.recipes.push({
        id,
        ...foundRecipes
    })
    

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error!");

        return res.redirect("/admins/index");
    });

}

exports.show = function (req,res){
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(foundIndex){
        if (foundIndex.id == id) return true;
    });


    if(!foundRecipe) return res.render("not-found");

    return res.render("admins/show", {recipe: foundRecipe});
    
}


exports.edit = function (req,res){
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(foundIndex){
        if (foundIndex.id == id) return true;
    });


    if(!foundRecipe) return res.render("not-found");

    const recipe = {
        ...foundRecipe
    }

    return res.render("admins/edit", { recipe });
}

exports.put = function (req,res){
    const { id } = req.body;
    let index = 0;

    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if( id == recipe.id ){
            index = foundIndex;
            return true;
        }
    });

    if (!foundRecipe) return res.send(" Recipe is not found");

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write erro!");

        return res.redirect(`/admins/${id}`);
    });
}


exports.delete = function (req,res){
    const { id } = req.body;

    const fielterRecipes = data.recipes.filter(function(recipe){
        return recipe.id != id;
    });


    data.recipes = fielterRecipes;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write erro!");

        return res.redirect(`/admins/index`);
    });
}

