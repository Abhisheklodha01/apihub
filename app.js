import express from 'express'
import connectWithMongoDB from './db/index.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectWithMongoDB()

app.get("/", (req, res) => {
    return res.send("Workingfine")
})


export default app