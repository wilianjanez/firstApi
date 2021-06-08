const Sequelize = require('sequelize')
const sequelize = require('../../config/database')

class Users extends Sequelize.Model {}
Users.init({
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    city: Sequelize.STRING,
    state: Sequelize.STRING
}, { sequelize, modelName: 'users'})

sequelize.sync();
module.exports = Users;