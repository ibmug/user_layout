///GLP

module.exports = function(sequelize, DataTypes){
    const GroceryListProduct = sequelize.define("GroceryListProduct", {

        quantity: DataTypes.INTEGER

    }); 

  //Belongs to many deals with the association here....
    ////Regla que evite que se haga cascade a Product(con un assoc)
    
    return GroceryListProduct;

}

