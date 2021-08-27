const express= require('express')
const router=express.Router()
const {createNewQN,readAllQ} = require('../controllres/questionControllers')

router.get('/:id',readAllQ)
router.post('/createNewQuestion',createNewQN)



module.exports =router;
