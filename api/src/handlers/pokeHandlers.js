const {getPokeController, getPokeByIdController, createPokeController, getPokeByNameController} = require('../controllers/pokeControllers')

const getPokeHandler = async (req, res) => {
    const {name} = req.query
    try {
        const result = name ? await getPokeByNameController(name) : await getPokeController()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getPokeByIdHandler = async (req, res) => {
    const {id} = req.params
    const source = isNaN(id) ? 'dbb' : 'api'
    try {
        const result = await getPokeByIdController(id, source)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const createPokeHandler = async (req, res) => {
    //const {name, types, hp, attack, defense, speed, height, weight, image} = req.body
    const dataBody = req.body
    try {
       // const result = await createPokeController({name, types, hp, attack, defense, speed, height, weight, image})
        const result = await createPokeController(dataBody)

        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {getPokeHandler, getPokeByIdHandler, createPokeHandler}