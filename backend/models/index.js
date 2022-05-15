const { model } = require('mongoose')
const BronzerSchema = require('./bronzer')
const BrowsSchema = require('./brows')
const MakeupSchema = require('./makeup')
const FoundationSchema = require('./foundation')
const LipstickSchema = require('./lipstick')

const Bronzer = model('bronzers', BronzerSchema)
const Brows = model('brows', BrowsSchema)
const Foundation = model('foundations', FoundationSchema)
const Lipstick = model('lipsticks', LipstickSchema)
const Makeup = model('faces', MakeupSchema)

module.exports = {
    Bronzer,
    Brows,
    Foundation,
    Lipstick,
    Makeup
}