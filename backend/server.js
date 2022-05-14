const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { Bronzer, Brow, Foundation, Lipstick, Makeup } = require('../models')
const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('Okayyyyy')
})

app.get('/api/', async (req, res) => {
    const allPokemons = await Pokemon.find({});
    res.send(allPokemons);
    // res.json(allpokemons)
})

app.get('/api/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    const onePokemon = await Pokemon.findById(id)
    res.json(onePokemon)
})

app.get('/api/poketypes', async (req, res) => {
        const allPokeTypes = await Poketype.find({})
        res.send(allPokeTypes)
    })

app.post('/api/add-pokemon', async (req, res) => {
        const addNewPokemon = await req.body
            Pokemon.insertMany(addNewPokemon)
            return res.status(201).json({Pokemon})
    })

app.get('/api/poketypes/:id', async (req, res) => {
    const { id } = req.params;
    const onePoketype = await Poketype.findById(id)
    res.json(onePoketype)
})

app.put('/api/pokemons/:id', async (req, res) => {
    const { num, name, img, type, height, weight, weakness } = await req.body;
    try {
    const updateOne = await Pokemon.findByIdAndUpdate(req.params.id, { num, name, img, type, height, weight, weakness }, {new:true})
    res.status(200).send('update working')
    } catch (e) {
        return res.status(500).json({error:e.message})
    }
})

app.delete('/api/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    const deleteOne = await Pokemon.findByIdAndDelete(req.params.id)
    return res.send(deleteOne)
    console.log('delete works')
})


app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})