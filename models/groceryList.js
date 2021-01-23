module.exports = function(sequelize, DataTypes){
    var GroceryList = sequelize.define("GroceryList",{
        //Lets give the Grocery List model name the following:
        //--//ID-lista //id-Producto //cantidad
        id:{
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },
    });


    GroceryList.associate = function(models){
        //Associating gList with Products.
        GroceryList.hasMany(models.Product,{
            foreignKey: 'productID',
            allowNull: false,
            onDelete: 'RESTRICT' //setNull, cascade, noaction,setdefault,restrict
        });
    };

    return GroceryList;
}


