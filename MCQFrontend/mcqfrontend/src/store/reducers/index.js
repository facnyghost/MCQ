import {combineReducers} from 'redux'
import userReducer from './user'
import questionReducer from './questions'
export default combineReducers({
    userReducer,
    questionReducer,
})