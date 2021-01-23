///GLP

module.exports = function(sequelize, DataTypes){
    const GroceryListProduct = sequelize.define("GroceryListProduct", {

    }); 

    GroceryListProduct.associate = function(models){
        //Associating GLP with product AND groceryList
        GroceryListProduct.belongsTo(models.Product,{
            foreignKey:{
                allowNull:false
            },
        });
        GroceryListProduct.belongsTo(models.GroceryList,{
            foreignKey:{
                allowNull:false
            },
        });
    }

    return GroceryListProduct;

}

