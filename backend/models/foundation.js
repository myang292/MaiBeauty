const { Schema } = require('mongoose')

const Foundation = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        photoUrl: { type: String, required: true },
    },
    {timestamps: true}
)

module.exports = Foundation