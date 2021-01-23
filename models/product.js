module.exports = function(sequelize, DataTypes){
    var Product = sequelize.define("Product", {
        //Giving the Product model a name of type stirng.
        //ID // Nombre //Categoria // Subcatogery //Marca //SKU
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            // validate: {
            //     allowNull: [1]
            //   } 
        },
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        subcategory: DataTypes.STRING,
        price: DataTypes.INTEGER,
        brand: DataTypes.STRING
    });

        Product.associate = function(models){   
            Product.belongsTo(models.GroceryList); //Adds id to Grocery List?

        };

        return Product;
    
}