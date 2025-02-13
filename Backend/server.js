const express = require('express')
const app = express()

require('dotenv').config()
const port  = process.env.PORT || 4000


// middleware...........
const cors = require('cors')
app.use(cors({
    origin:'*'
}))
 
app.use(express.json())

const router = require('./routes/clubRoutes')
app.use('/api/v1',router)

//database connection..........
const connectDB = require('./database/mongodb')
connectDB()


app.listen(port,()=>{
    console.log('server is connected successfully')
})

