const { Schema } = require('mongoose')

const Brows = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        photoUrl: { type: String, required: true },
    },
    {timestamps: true}
)

module.exports = Brows