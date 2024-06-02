// setup path for resolve request

// 1. import express
const express= require('express')

// import controller
const userController=require('../controllers/userController')

//2 create a object for router cloass inside express module
const router=new express.Router()

//3 setup path to resolve request
// a) register
router.post('/user/register',userController.register)
router.post('/user/login',userController.login)

// historysave API Endpoint
router.post('/history-add',userController.historyAdd)

// get history api

router.get('/getHistory/:userId',userController.historyFetch)

// deleteHistory
router.delete('/deleteHistory',userController.historyDelete)
// 4 export router
module.exports=router