const Router = require('express').Router()
// const controller = require('../controller/AllController')
// const middleware = require('../middleware')


Router.get('/face')
Router.get('/foundation')
Router.get('/bronzer')
Router.get('/brows')

Router.post('/review')
Router.post('/review/edit')
Router.delete('/review/delete')

module.exports = Router
