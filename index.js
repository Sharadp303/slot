const express=require('express')
const connection=require('./config/dbconfig')
const app= express()

app.use(express.json())

require('./routes/slotroutes')(app)









app.listen(3333,()=>{
    console.log(`Server running on localhost:3333`)
})




