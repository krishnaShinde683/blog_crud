const express=require('express')
const app= express()
const bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())




const route=require('./Routes/route')
app.use('/api',route)


app.listen(3050,()=>{
    console.log("server started")
})