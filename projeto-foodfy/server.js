const express = require("express");
const server = express();
const nunjucks = require("nunjucks");


const cards = require("./data_recipe");
const cardsHome =  require("./data_Home");
const recipes = require("./data"); 

server.use(express.static('public'));

server.set("view engine", "njk");
nunjucks.configure("views", { 
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req,res) => {

    const home = {
        title1: "As melhores receitas",
        text: "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
        imagem: "assets/chef.png",
        title2: "Mais acessadas",
    };


    res.render("home", { items: cardsHome, home: home});
});


server.get("/about", (req,res) =>{
    res.render("about");
});

server.get("/recipe", (req,res) =>{
   return res.render("recipe", {items: cards})
});


server.get("/recipe/:id", (req,res) => {
    const id = req.params.id;

    const  recipe = recipes.find(function(recipe){
        return recipe.id == id;
    });
    
    if (!recipe) return res.status(404).render("not-found");

    return res.render("recipe_details", {recipe:  recipe});
});


//error
server.use(function(req, res) {

    return res.status(404).render('not-found');
});

server.listen(5000, function(){
    console.log("server is rouning");
});