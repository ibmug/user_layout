const { identity } = require("lodash");
var db = require("../models");


// Route that processes products..
//Viewing, Adding, Updating
module.exports = function(app){
    
    //View
    app.get("/api/products", function(req,res){
        db.Product.findAll().then(function(groceryListDB){
            res.json(groceryListDB);
        });
    });

    app.get("/api/categories", function(req,res){
      db.Category.findAll().then(function(groceryListDB){
          res.json(groceryListDB);
      });
  });
    // app.get("/", function(req, res){
    //   db.Product.findAll().then(funcion)
    // });

    app.get("/api/products/:id", function(req,res){
      db.Product.findOne({
        where: {
          id: req.params.id
        },
      }).then(function(dbResult) {
        // res.render("index", hbsObject);
        //console.log(dbResult.dataValues);
        res.render("update-product", {data: dbResult.dataValues});
      });
    });

    app.get("/add/product", function(req,res){
      console.log("User is looking to add a product..");
  
      db.Category.findAll().then(function(result){
        // let categories = [];
        // for(let x in result){
        //   categories[x] = {
        //     categ: result[x]
        //   } 
        // }

        let categories = [];
        for(let x in result){
          categories[x] = {
            id:result[x].id,
            name:result[x].name
          }
        }
        console.log(categories);
        res.render("addProduct",{data: categories});
        //Make validation that there were indeed results...
      });

    });

    app.post("/add/product", function(req, res) {
        console.log(req.body);
        db.Product.create({
          name: req.body.name,
          CategoryId: req.body.cat,
          price: req.body.price
        })
          .then(function(groceryListDB) {
            res.json(groceryListDB);

            //Make validation that a row was changed...
          });
      });
    

}