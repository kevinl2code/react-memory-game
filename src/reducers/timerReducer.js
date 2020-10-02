import { NEW_GAME, RESET } from '../actions/types'


export default (time = 60, action) => {
    switch (action.type) {
        case NEW_GAME: return action.payload;
        case RESET: return action.payload;
        default : return time
    } 
}
