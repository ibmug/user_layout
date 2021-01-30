const { identity } = require("lodash");
var db = require("../models");


// Route that processes products..
//Viewing, Adding, Updating
module.exports = function(app){
    

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

           //Maybe send empty objects?
           if(data){
               res.render("groceryList", {data});
           } else{
               res.render("error404");
           }
        });
    });

    app.get("/", function(req,res){
        //Let's find all the lists, pull all the ids so when the user wants to create one we can simply tell the user it already exists...
        db.GroceryList.findAll().then((dbResult)=>{
            if(dbResult){
                res.render("addList", {data: dbResult});
            }
        });
    });

}
