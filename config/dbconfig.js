const mysql=require('mysql2')
require('dotenv').config()
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'slot',
    password: process.env.pass
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected to mySQL")
})

module.exports=connection

