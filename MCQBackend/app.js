const express= require('express')
const app= express()
const morgan= require('morgan')
const mongoose = require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const routes =require('./routes')
const config=require('./config/app')


//middleware
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

const PORT= config.appPort
const URL=config.appUrl
const DBLink= config.dbAPI

mongoose.connect(DBLink,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'MCQ'
})
.then(() =>{
    console.log('Database connected .....')
})
.catch((err) =>[
    console.log(err)
])

app.listen(PORT,()=>{
    console.log(`Server listening on URL: ${URL}:${PORT}`)
})