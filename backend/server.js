//importing the packages we need
const express= require('express')
const router= require('./Routes')
const dotenv =require('dotenv')


const app= express()
dotenv.config()
app.use(express.json())

app.use('/productsTable', router)

app.listen(process.env.PORT || 3001, ()=>{
    console.log(`server is running: ${process.env.PORT}`);
})