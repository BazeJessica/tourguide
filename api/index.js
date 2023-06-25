const bcrypt = require('bcryptjs')
const express = require('express')
const cors  = require('cors')
const mongoose = require('mongoose')
const User = require('./model/User.js')
const dotenv = require('dotenv')
const app = express()

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
const bcryptSalt =  bcrypt.genSaltSync(12)
dotenv.config()
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL)

app.get('/test', (req, res) => {
    res.json("test ok")
})

app.post('/register',async (req, res) => {
    const {name, email, password} = req.body
    const user = await User.create({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, bcryptSalt)
    })
    res.json(user)
})

app.listen(4000)