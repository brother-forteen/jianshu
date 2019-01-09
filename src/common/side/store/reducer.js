import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    sideShareShow: false
});

export default (state = defaultState, action) => {
    let newState;
    
    switch (action.type) {
        case constants.SHOW_SIDE_SHARE:
            newState = state.set('sideShareShow', action.booleanValue);
            break;
            
        default:
            newState = state;
    }
    return newState;
}