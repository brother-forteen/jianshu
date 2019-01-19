import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: true,
    showState: '',              // tab 显示
    errorMsg: '',
    showErrorBool: false
});

export default (state=defaultState, action) => {
    let newState;
    switch (action.type) {
        case constants.LOGIN_PARAMS:
            newState = state.set('showState', action.data);
            break;
            
        case constants.LOGIN_STATE:
            console.log(action.data);
            newState = state.set('login', action.data);
            window.history.back();
            break;
            
        case constants.SHOW_ERROR_MSG:
            newState = state.merge({
                errorMsg: action.data,
                showErrorBool: action.bool
            });
            break;
            
        default:
            newState = state;
            break;
    }
    return newState;
}