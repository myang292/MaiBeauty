const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { Bronzer, Brow, Foundation, Lipstick, Makeup } = require('./models')
const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('Okayyyyy')
})

app.get('/api/bronzer', async (req, res) => {
    const allBronzers = await Bronzer.find({});
    res.send(allBronzers);
})

app.get('/api/bronzer/:id', async (req, res) => {
    const { id } = req.params;
    const oneBronzer = await Bronzer.findById(id)
    res.json(oneBronzer)
})

app.get('/api/brow', async (req, res) => {
    const allBrows = await Brow.find({});
    res.send(allBrows);
})

app.get('/api/brow/:id', async (req, res) => {
    const { id } = req.params;
    const oneBrow = await Brow.findById(id)
    res.json(oneBrow)
})

app.get('/api/foundation', async (req, res) => {
    const allFoundations = await Foundation.find({});
    res.send(allFoundations);
})

app.get('/api/foundation/:id', async (req, res) => {
    const { id } = req.params;
    const oneFoundation = await Foundation.findById(id)
    res.json(oneFoundation)
})

app.get('/api/lipstick', async (req, res) => {
    const allLipsticks = await Lipstick.find({});
    res.send(allLipsticks);
})

app.get('/api/lipstick/:id', async (req, res) => {
    const { id } = req.params;
    const oneLipstick = await Lipstick.findById(id)
    res.json(oneLipstick)
})


app.get('/api/makeup', async (req, res) => {
        const allMakeup = await Makeup.find({})
        res.send(allMakeup)
    })

app.get('/api/makeup/:id', async (req, res) => {
    const { id } = req.params;
    const oneMakeup = await Makeup.findById(id)
    res.json(oneMakeup)
})





// CRUD!!!!

// app.post('/api/add-reivew', async (req, res) => {
//         const addReview = await req.body
//             Pokemon.insertMany(addReview)
//             return res.status(201).json({Pokemon})
//     })

// app.put('/api/pokemons/:id', async (req, res) => {
//     const { num, name, img, type, height, weight, weakness } = await req.body;
//     try {
//     const updateOne = await Pokemon.findByIdAndUpdate(req.params.id, { num, name, img, type, height, weight, weakness }, {new:true})
//     res.status(200).send('update working')
//     } catch (e) {
//         return res.status(500).json({error:e.message})
//     }
// })

// app.delete('/api/pokemons/:id', async (req, res) => {
//     const { id } = req.params;
//     const deleteOne = await Pokemon.findByIdAndDelete(req.params.id)
//     return res.send(deleteOne)
//     console.log('delete works')
// })


app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})