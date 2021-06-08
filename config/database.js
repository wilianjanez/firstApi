const Sequelize = require('sequelize')
const sequelize = new Sequelize('CRMPNLD','root','root',{
    host: '127.0.0.1',
    dialect: 'mysql'

})

sequelize.authenticate().then(function(){
    console.log('Connection OK!')
}).catch(function(erro){
    console.log('Connection FAIL: ' + erro)
})

module.exports = sequelize;