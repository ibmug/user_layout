//Depends
var express = require("express");

//Sets express up
var app = express();
var PORT = process.env.PORT || 8080;

//Les require the models
var db = require("./models");

//Sets up the express app to handle d parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Static dictionary

app.use(express.static("public"));

//Routes
require("./routes/lista-super-routes.js");

//Sync our sequelize models and then starting our Express app
db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT,function(){
        console.log("App listening on PORT: "+PORT);
    });
});