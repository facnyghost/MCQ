import {SUBMIT_USER,USER_NOT_SUBMIT} from '../types/type'

const initialState ={
    user: JSON.parse(localStorage.getItem('user')) || {},
    isSubmit:false
}

const userReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case SUBMIT_USER:
        return{
            ...state,
            user:payload.data,
            isSubmit:true
        }
        case USER_NOT_SUBMIT:
            return{
                state,
                user:{},
                isSubmit:false
            }
        default:{
            return state
        }
    }
}
export default userReducer