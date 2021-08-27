const express =require('express')
const router = express.Router()


router.use('/user',require('./user'))
router.use('/question',require('./question'))


module.exports = router