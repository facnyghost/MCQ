const express= require('express')
const router=express.Router()
const {createNewUser,readUserById,deleteUser} = require('../controllres/userController')
const {validate} =require('../validator')
const {rules: createRules} = require('../validator/user/create')

router.get('/:id',readUserById)
router.post('/createNewUser',[createRules,validate],createNewUser)
router.delete('/:id',deleteUser)



module.exports =router;
