


module.exports=((sequelize,DataTypes)=>{
    const Recipies=sequelize.define('recipe',{
        name:DataTypes.STRING,
        desc:DataTypes.STRING,
        image_url:DataTypes.STRING,
        creator_id:DataTypes.STRING,
        
    })

    return Recipies;
})