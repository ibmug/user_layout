module.exports = function(sequelize, DataTypes){
    var GroceryList = sequelize.define("GroceryList",{
        //Lets give the Grocery List model name the following:
        //ID-privado //ID-publico-lista //id-Producto //cantidad
        //0 -- RSV --- 46(azucar) -- 2
        //
        //server.com/lists/id-publico
        publicID: DataTypes.STRING,

        
    });


    GroceryList.associate = function(models){
        //Associating gList with Products.
        GroceryList.hasMany(models.GroceryListProduct);
    };

    return GroceryList;
}


