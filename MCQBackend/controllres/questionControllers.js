const Question = require('../models/questions');



/*read spefice users member by id */
exports.readAllQ=async(req,res) =>{
    const questions = await Question.find().limit(5);
    if(!questions){
        res.status(500).json({error:'The questions not found.'})
    }
    res.status(200).json({questions})
}


/* create new staff account */

exports.createNewQN= async (req,res) =>{
    try{
        const question = await new Question(req.body);

        await question.save((err,question) => {
            if(err){
                return res.status(400).json({
                    error:err.message
                })
            }
            return res.status(200).json({question});
        })
    } catch(err){
        console.log(err.message);
    }
}

