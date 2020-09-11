const express = require("express");
const routes = express.Router();
const admins = require("./controller/admin");
const users = require("./controller/user");

routes.get("/", users.home);

routes.get("/about", users.about);

routes.get("/recipe", users.recipes);

routes.get("/recipe/:id", users.show);


//admin
routes.get("/admins/index", admins.index);

routes.get("/admins/create", admins.create);

routes.post("/admins", admins.post);

routes.put("/admins", admins.put); 

routes.delete("/admins", admins.delete); 

routes.get("/admins/:id", admins.show);

routes.get("/admins/:id/edit", admins.edit);


//error
routes.use(function(req, res) {

    return res.status(404).render('not-found');
});


module.exports = routes;