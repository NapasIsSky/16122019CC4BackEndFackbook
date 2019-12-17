module.exports = (sequelize, DataType) => {
   const user = sequelize.define('user',{
       username:{
           type: DataType.STRING(225)
       },
       password: {
           type: DataType.STRING(225)
       },
       name:{
           type: DataType.STRING(100)
       },
       role:{
           type: DataType.ENUM('admin', 'user')
       }
    })
    
    return user
}
    