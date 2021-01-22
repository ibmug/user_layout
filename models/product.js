module.exports = function(sequelize, DataTypes){
    let Product = sequelize.define("Product", {
        //Giving the Product model a name of type stirng.
        //ID // Nombre //Categoria // Subcatogery //Marca //SKU
        id: DataTypes.INT,
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        subcategory: DataTypes.STRING,
        price: DataTypes.INT,
        brand: StringType.STRING
    });
}