import {FETCH_QUESTIONS} from '../types/type'


const initialState ={
    questions:{}
}

const questionReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case FETCH_QUESTIONS:
        return{
            ...state,
            questions:payload,
        }
        default:{
            return state
        }
    }
}
export default questionReducer