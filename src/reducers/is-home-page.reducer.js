import { HOME_PAGE } from '../actions/action-types';

export default function(state = false, action) {
    switch(action.type) {
        case HOME_PAGE:
            return action.payload;
        default: 
            return state;
    }
}