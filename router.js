const express=require('express')
const UserController=require('./controllers/Usercontroller')
const router=express.Router()


// user related routes
router.get('/',Usercontroller.home)
router.post('/register',)
router.post('/login')
router.post('/logout')

module.exports=router