    module.exports = function(sequelize, DataTypes){
        const Category = sequelize.define("Category", {
            
            name: DataTypes.STRING,
        });
    
            Category.associate = function(models){   
                //Product.belongsTo(models.GroceryList); //Adds id to Grocery List?
                Category.hasMany(models.Product);

            }

    
            return Category;

        }