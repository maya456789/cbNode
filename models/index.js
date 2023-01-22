const {Sequelize,DataTypes}=require('sequelize');

//<------ Create Database ---->
const sequelize=new Sequelize(process.env.DATABASENAME,process.env.DATABASE_USER,'',{
    host:process.env.DATABASE_HOST,
    dialect:'mysql',
   // logging:false, //To hide all queries from terminal at runtime
    pool:{max:5,min:0,idle:10000},
});
//<------- Creation End ------>

//------>Connect to database<-------
sequelize.authenticate().then(()=>{ //Check wether connect to db or not
    console.log("Connected");
}).catch(err=>{
    console.log("Error"+err);
});

//------>Connection End <---------

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.sequelize.sync({force:false}).then(()=>{ //force:true Drop all table data forcefully
    console.log("Synchronize successful");
});


//db.stocks=require('./available_stock')(sequelize,DataTypes);
db.user=require('./user')(sequelize,DataTypes);
db.recipie=require('./recipe')(sequelize,DataTypes);
db.ingredient=require('./ingredient')(sequelize,DataTypes);
db.process=require('./process')(sequelize,DataTypes);

db.user.hasOne(db.recipie,{foreignKey:'creator_id'});
db.recipie.belongsTo(db.user,{foreignKey:'creator_id'});

db.recipie.hasMany(db.ingredient,{foreignKey:'recipe_id'});
db.ingredient.belongsTo(db.recipie,{foreignKey:'recipe_id'});

db.recipie.hasMany(db.process,{foreignKey:'recipe_id'});
db.process.belongsTo(db.recipie,{foreignKey:'recipe_id'});

db.sequelize.sync().then(()=>{
    console.log("Re-syncing..");
})

module.exports=db;