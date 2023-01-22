




module.exports=((sequelize,DataTypes)=>{
    const Ingredient=sequelize.define('ingredient',{
        items:DataTypes.STRING,
        amount:DataTypes.STRING,
        unit:DataTypes.STRING,
        recipe_id:DataTypes.STRING,
        
    })

    return Ingredient;
})