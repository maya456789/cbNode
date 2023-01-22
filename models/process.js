



module.exports=((sequelize,DataTypes)=>{
    const Process=sequelize.define('process',{
        step:DataTypes.STRING,
        recipe_id:DataTypes.STRING,
        
    })

    return Process;
})