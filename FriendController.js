const { Op } = require("sequelize");
const req = require('express/lib/request');
const res = require('express/lib/response');
const dataBase = require('./models/db');
const Friend = require('./models/friend');


async function listaUsuarios() {
    try {
        const response = await Friend.findAll()

        return response;
    } catch (error) {
        console.log(error)
    }
}


async function listaUmUsuarioId(id) {
    try {
        const response = await Friend.findOne({
            where: {
                id: id
            }
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

async function listaUmUsuario(name) {
    try {
        const response = await Friend.findOne({
            where: {
                name: name
            }
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

async function readicionar(estrutura) {
    try {
        const { name, id } = estrutura;
        const response = await Friend.update({ name }, {
            where: {
                id: id
            }
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}


async function lerLetra(name) {
    try {

        const response = await Friend.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })
        return response;
    } catch (error) {
        console.log(error)
    }

}

async function deletar(estrutura) {
    try {
        const { id } = estrutura
        const response = await Friend.destroy({
            where: {
                id: id
            },

        })
        return response;

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    listaUsuarios, listaUmUsuario, readicionar, listaUmUsuarioId, lerLetra, deletar
}