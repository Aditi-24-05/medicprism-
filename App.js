const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const user = require('./routes/user')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/user', user)

const port = process.env.PORT || 8080

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{console.log(`listening on port ${port}`)})    
    } catch (error) {
       console.log(error) 
    } 
}

start()