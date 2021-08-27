const User = require('../models/users')



/*read spefice users member by id */
exports.readUserById=async(req,res) =>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(500).json({error:'The user with the given Id was not found.'})
    }
    res.status(200).json({user})
}


/* create new staff account */

exports.createNewUser= async (req,res) =>{
    try{
        const userExist= await User.findOne({userName:req.body.userName});
        if(userExist){
            return res.status(400).json({error:'The userName already exist...'});
        }
        const user = await new User(req.body);

        await user.save((err,user) => {
            if(err){
                return res.status(400).json({
                    error:err.message
                })
            }
            return res.status(200).json({user});
        })
    } catch(err){
        console.log(err.message);
    }
}



exports.deleteUser=async(req,res) =>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(!user){
            return res.status(404).json({error:'user not found!'})
        }
        else{
            return res.status(200).json({message:'The user is deleted!'})
        }
    }).catch(err =>{
        return res.status(500).json({error:err})
    })
}

