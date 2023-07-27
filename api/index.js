const bcrypt = require('bcryptjs')
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('./model/User.js')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))


const bcryptSalt = bcrypt.genSaltSync(12)
const jwtSecret = 'ILOVEYOULORD'
dotenv.config()
app.use(express.json())
app.use(cookieParser())

try {

    mongoose.connect(process.env.MONGODB_URL)
    console.log("dabase connected");
} catch (error) {
    console.log(error);
}



app.get('/test', (req, res) => {
    res.json("test ok")
})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    try {

        const user = await User.create({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(user)
    } catch (error) {
        res.send("unsuccessful")
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const userDoc = await User.findOne({ email })
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            const token = jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            },
                jwtSecret)




            return res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None' }).json(token)



        } else {
            res.json('Incorrect password')
        }
    } else {
        res.json('Already used')

    }
})

app.get('/profile', (req, res) => {

    const { token } = req.cookies

    if (token) {
        jwt.verify(token, jwtSecret, async (err, userData) => {

            if (err) { console.log(err) }
            else {
                const data = await User.findById(userData.id)
                res.json(data)
            }
        })
    } else {
        console.log("no token");
    }




})

app.get('/logout', (req, res) => {
    
    res.cookie('token', null).json(true)
})
app.listen(4000)