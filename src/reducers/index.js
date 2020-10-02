import { combineReducers } from 'redux'
import  deckReducer  from './deckReducer'
import timerReducer from './timerReducer'
import statusReducer from './statusReducer'



export default combineReducers({
    deck: deckReducer,
    timer: timerReducer,
    status: statusReducer
})