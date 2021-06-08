const { use } = require('../../config/routes')
const { create } = require('../models/users')
const Users = require('../models/users')

module.exports = {
    async list(req, res) {
        try{
            const users = await Users.findAll()
            return res.json(users)

        }catch(err){
            return console.error("Erro na listagem de Users: ", err)
        }
    },
    async create(req, res){
        const {name, age, city, state, type} = req.body;
        try {
            const user = await Users.create({name, age, city, state, type});
            return res.json(user);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async delete(req, res){
        try {
            await Users.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    }
}