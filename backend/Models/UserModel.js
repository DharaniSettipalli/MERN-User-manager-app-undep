const mongoose = require('mongoose')

//Adding a field = add one object
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: false,
        default: ''
    },
    address: {
        type: String,
        required: false,
        default: ''
    }
}, {
    strict: false,
    timestamps: true
})

const model = mongoose.model('Users', userSchema)

module.exports = model