const { identity } = require("lodash");
var db = require("../models");


// Route that processes products..
//Viewing, Adding, Updating
module.exports = function(app){
    
    //View
    app.get("/api/products", function(req,res){
        db.Products.findAll().then(function(groceryListDB){
            res.json(groceryListDB);
        });
    });

    //Add
    app.post("/api/products", function(req,res){
        //Create a product with the data that was parsed by req.body
        //req.body comes from the front end, lets make sure it's set up correctly
        //console.log(req.body);
        db.Product.create(req.body).then((groceryListDB)=>{
            res.json(groceryListDB);
        });
    });


    //Update

    app.put("/api/products/:id", function(req,res){
        //Updathe product with the id available.
        db.update({where: {id: req.params.id}}).then((groceryListDB)=>{
            res.json(groceryListDB);
        });
    });


}