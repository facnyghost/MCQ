 const { check } = require('express-validator');


 exports.rules=(() =>{
     return [
        check('userName','Enter Name').notEmpty(),
         ]
 })()