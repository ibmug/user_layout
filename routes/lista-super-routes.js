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
            include: [db.GroceryListProduct]}).then((dbResult)=>{
            console.log(dbResult);
           // res.render("groceryList", {data:dbResult});
           res.json(dbResult);
        });
    });

}