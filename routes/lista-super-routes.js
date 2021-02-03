const { identity } = require("lodash");
var db = require("../models");


// Route that processes products..
//Viewing, Adding, Updating
module.exports = function(app){
    
    //PUBLICID
    //app.get("/lista/:id:product")

    app.get("/lista/:id", function(req,res){
        let id = req.params.id;
        db.GroceryList.findOne({
            where: {publicID: id}, 
            include: db.Product, 
        }).then((dbResult, err)=>{
           //console.log(dbResult);
            

            if(dbResult){
                // res.status(404);
                // res.send('Not found, try again!');
                console.log("Showing List..")
                let currntList = dbResult.dataValues;
            let prdcts = [];
            
            dbResult.dataValues.Products.map((product)=>{prdcts.push(product.dataValues)});
            
            
            // res.json(dbResult.dataValues.Products);
            let data = {list:currntList, items:prdcts};
            return res.status(202).render("groceryList",{data});



              //  return res.status(404).render("error");
            }else {
                console.log("Handling error...");
                return res.status(404).render("addList");
            }

            // let currntList = dbResult.dataValues;
            // let prdcts = [];
            
            // dbResult.dataValues.Products.map((product)=>{prdcts.push(product.dataValues)});
            
            
            // // res.json(dbResult.dataValues.Products);
            // let data = {list:currntList, items:prdcts};
            // res.status(202).render("groceryList",{data});
          
        }).catch((err)=>{
            throw(err);
            }
        );
    });

    app.get("/", function(req,res){
        //Let's find all the lists, pull all the ids so when the user wants to create one we can simply tell the user it already exists...
        db.GroceryList.findAll().then((dbResult)=>{
            if(dbResult){
                res.render("addList", {data: dbResult});
            }
        });
    });

    app.post("/addToList", function(req,res){
        // console.log("DOING SOMETHING");
        // console.log(req.body.GroceryListId);
        // console.log(req.body.ProductId);
        //console.log(req);
        db.GroceryListProduct.upsert({
            GroceryListId:req.body.GroceryListId,
            ProductId:req.body.ProductId,
            quantity: req.body.quantity
        }).then(function(result){
            console.log(result);
            location.reload();
        });
    });

    app.post("/add/list/:id", function(req,res){
        //Let's find all the lists, pull all the ids so when the user wants to create one we can simply tell the user it already exists...
        //console.log("POSTING: "+ req.params.id);
        db.GroceryList.create({
            publicID: req.params.id
        }).then(function(dbResult){
            console.log(dbResult);

            if(dbResult._options.isNewRecord){
                console.log("List Successfully Saved!");
                return res.status(202).render("groceryList");
            } else {
                console.log("List was not saved, please try again!");
                return res.status(404).render("addList");
            }
            
            
        });
    });

}
