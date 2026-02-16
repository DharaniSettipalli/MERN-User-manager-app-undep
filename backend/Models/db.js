const mongoose = require('mongoose')

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongo DB is connected')
    }
    catch (error) {
        console.log('Error creating DB connection: ', error);
    }
}
module.exports = conn