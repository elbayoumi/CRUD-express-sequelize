module.exports=(db,type)=>{
    return db.define('cateories',{
        id:{
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        title:{
            type: type.STRING,
            allowNull:false,
            unique:true
        }
})
}