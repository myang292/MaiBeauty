const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { Bronzer, Brows, Foundation, Lipstick, Makeup } = require('./models')
const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('Okayyyyy')
})

//READ
app.get('/api/bronzer', async (req, res) => {
    const allBronzers = await Bronzer.find({});
    res.send(allBronzers);
})

app.get('/api/bronzer/:id', async (req, res) => {
    const { id } = req.params;
    const oneBronzer = await Bronzer.findById(id)
    res.json(oneBronzer)
})

app.get('/api/brows', async (req, res) => {
    const allBrows = await Brows.find({});
    res.send(allBrows);
})

app.get('/api/brows/:id', async (req, res) => {
    const { id } = req.params;
    const oneBrow = await Brows.findById(id)
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




//CREATE 
app.post('/api/addBronzer', async (req, res) => {
    const addNewBronzer = await req.body
    Bronzer.insertMany(addNewBronzer)
    return res.status(201).json({Bronzer})
})

app.post('/api/addBrow', async (req, res) => {
    const addNewBrows = await req.body
    Brows.insertMany(addNewBrows)
    return res.status(201).json({Brows})
})

app.post('/api/addFoundation', async (req, res) => {
    const addNewFoundation = await req.body
    Foundation.insertMany(addNewFoundation)
    return res.status(201).json({Foundation})
})

app.post('/api/addLipstick', async (req, res) => {
    const addNewLipstick = await req.body
    Lipstick.insertMany(addNewLipstick)
    return res.status(201).json({Lipstick})
})


//UPDATE working
app.put('/api/editBronzer/:id', async (req, res) => {
    const { name, description, photoUrl, price } = await req.body;
    try {
    const updateOne = await Bronzer.findByIdAndUpdate(req.params.id, { name, description, photoUrl, price }, {new:true})
    res.status(200).send('bronzer update working')
    } catch (e) {
        return res.status(500).json({error:e.message})
    }
})

app.put('/api/editBrows/:id', async (req, res) => {
    const { name, description, photoUrl, price } = await req.body;
    try {
    const updateOne = await Brows.findByIdAndUpdate(req.params.id, { name, description, photoUrl, price }, {new:true})
    res.status(200).send('brows update working')
    } catch (e) {
        return res.status(500).json({error:e.message})
    }
})

app.put('/api/editFoundation/:id', async (req, res) => {
    const { name, description, photoUrl, price } = await req.body;
    try {
    const updateOne = await Foundation.findByIdAndUpdate(req.params.id, { name, description, photoUrl, price }, {new:true})
    res.status(200).send('foundation update working')
    } catch (e) {
        return res.status(500).json({error:e.message})
    }
})

app.put('/api/editLipstick/:id', async (req, res) => {
    const { name, description, photoUrl, price } = await req.body;
    try {
    const updateOne = await Lipstick.findByIdAndUpdate(req.params.id, { name, description, photoUrl, price }, {new:true})
    res.status(200).send('lipstick update working')
    } catch (e) {
        return res.status(500).json({error:e.message})
    }
})


//DELETE
app.delete('/api/deleteBronzer/:id', async (req, res) => {
    const { id } = req.params;
    const deleteOne = await Bronzer.findByIdAndDelete(req.params.id)
    return res.send(deleteOne)
    console.log('bronzer delete works')
})

app.delete('/api/deleteBrows/:id', async (req, res) => {
    const { id } = req.params;
    const deleteOne = await Brows.findByIdAndDelete(req.params.id)
    return res.send(deleteOne)
    console.log('brows delete works')
})

app.delete('/api/deleteFoundation/:id', async (req, res) => {
    const { id } = req.params;
    const deleteOne = await Foundation.findByIdAndDelete(req.params.id)
    return res.send(deleteOne)
    console.log('foundation delete works')
})

app.delete('/api/deleteLipstick/:id', async (req, res) => {
    const { id } = req.params;
    const deleteOne = await Lipstick.findByIdAndDelete(req.params.id)
    return res.send(deleteOne)
    console.log('lipstick delete works')
})










app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})