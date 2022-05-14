const { Schema } = require('mongoose')

const Bronzer = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        photoUrl: { type: String, required: true },
    },
    {timestamps: true}
)

module.exports = Bronzer