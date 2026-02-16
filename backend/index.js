const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const conn = require('./Models/db.js')
const UserRoutes = require('./Routes/UserRoutes.js')


dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/user', UserRoutes)

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Hello from server')
})

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
    conn();
}
)

