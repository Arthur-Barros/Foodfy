const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

server.use(express.static('public'));

server.set("view engine", "njk");
nunjucks.configure("views", { 
    express: server
})

server.get("/", (req,res) => {
    res.render("home");
});

server.get("/about", (req,res) =>{
    res.render("about");
});

server.get("/recipe", (req,res) =>{
    res.render("recipe");
});



server.listen(5000, function(){
    console.log("server is rouning");
});