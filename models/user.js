

module.exports=((sequelize,DataTypes)=>{
    const Authuser=sequelize.define('user',{
        name:DataTypes.STRING,
        user_id:DataTypes.STRING,
        password:DataTypes.STRING,
    })

    return Authuser;
})