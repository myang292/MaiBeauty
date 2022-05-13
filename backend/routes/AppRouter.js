const Router = require('express').Router()


Router.get('/face', controller.GetFaceProducts)
Router.get('/foundation')
Router.get('/bronzer')
Router.get('/brows')

Router.post('/review')
Router.post('/review/edit')
Router.delete('/review/delete')

module.exports = Router
