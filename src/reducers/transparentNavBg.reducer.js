import { NAVBAR_TRANSPARENT } from '../actions/action-types';

export default function(state = false, action) {
    switch(action.type) {
        case NAVBAR_TRANSPARENT:
            return action.payload;
        default: 
            return state;
    }
}