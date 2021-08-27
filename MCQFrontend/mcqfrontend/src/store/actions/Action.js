
import HomeService from '../../services/HomeService'
import makeToast from "../../Toaster";
import QuestionService from '../../services/QuestionService';
import {SUBMIT_USER,FETCH_QUESTIONS} from '../types/type'


export const submitName= (params,history) => dispatch =>{
    return HomeService.submitName(params)
    .then(data =>{
        dispatch({type:SUBMIT_USER,payload:data})
        makeToast("success", "Have A nice time!");
          history.push('/test')
    })
    .catch((err) =>{ 
        makeToast("error", err);
        throw err

    })
}

export const getQuestions= () => dispatch =>{
    return QuestionService.getQuestions()
    .then(data =>{
        dispatch({type:FETCH_QUESTIONS,payload:data})
        return data
    })
    .catch(err =>{
        throw err
    })
}
