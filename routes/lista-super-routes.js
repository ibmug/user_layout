const { identity } = require("lodash");
var db = require("../models");


// Route that processes products..
//Viewing, Adding, Updating
module.exports = function(app){
    
    //View
    // app.get("/api/listas", function(req,res){
    //     db.GroceryList.findAll().then(function(groceryListDB){
    //         res.json(groceryListDB);
    //     });
    // });


    app.get("/lista/:id", function(req,res){
        let id = req.params.id;
        db.GroceryList.findOne({
            where: {publicID: id}, 
            include: db.Product, 
        }).then((dbResult)=>{
           
           let currntList = dbResult.dataValues;
           let prdcts = [];

           dbResult.dataValues.Products.map((product)=>{prdcts.push(product.dataValues)});
           
           
          // res.json(dbResult.dataValues.Products);
           let data = {list:currntList, items:prdcts};
           if(data){
               res.render("groceryList", {data});
           } else{
               res.status(404);
           }
        });
    });

}
