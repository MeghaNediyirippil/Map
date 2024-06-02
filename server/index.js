// 1. import .env
require('dotenv').config()

//2.  import express
const express=require('express')

//3.  inport cors
const cors=require('cors')

// import router
const router=require('./Routers/router')

// import connection
require('./DB/connections')

//4.  create server
const mserver=express()

//5. use of cors in server
mserver.use(cors())

// 6. Returns middleware that only parses json  - javascript object
mserver.use(express.json())

// use router
mserver.use(router)

//7. customise port ---by default -3000
const PORT=4000||process.env.PORT

// 8. to run server
mserver.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

mserver.get('/',(req,res)=>{
    res.send(`<h1>Google Map server running successfully and ready to accept requests for client</h1>`)
})

// mserver.post('/',(req,res)=>{
//     res.send(`post request`)
// })

