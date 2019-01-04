import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focus: false,
    list: []
});

export default (state = defaultState, action) => {
    // immutable 对象的set方法，会结合之前immutable对象的值，和设置的值，返回一个全新的对象
    
    let newState;
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            newState = state.set('focus', true);
            break;
            
        case constants.SEARCH_BLUR:
            newState = state.set('focus', false);
            break;
            
        case constants.CHANE_LIST:
            newState = state.set('list', action.data);
            break;
            
        default:
            newState = state;
            break;
    }
    
    return newState;
}