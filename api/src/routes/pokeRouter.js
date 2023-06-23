const { Router } = require('express');
const {getPokeHandler, getPokeByIdHandler, createPokeHandler} = require('../handlers/pokeHandlers')

const pokeRouter = Router()

pokeRouter.get('/', getPokeHandler)
pokeRouter.get('/:id', getPokeByIdHandler)
pokeRouter.post('/', createPokeHandler)

module.exports = {pokeRouter}