import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focus: false,
    mouseIn: false,
    list: [],
    currentPage: 1,
    totalPage: 1,
    showHeader: true
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
            newState = state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
            break;

        case constants.MOUSE_ENTER:
            newState = state.set('mouseIn', true);
            break;

        case constants.MOUSE_LEAVE:
            newState = state.set('mouseIn', false);
            break;

        case constants.PAGE_CHANGE:
            let nowCurrentPage = action.currentPage < action.totalPage ? ++action.currentPage : 1;
            newState = state.set('currentPage', nowCurrentPage);
            break;
            
        case constants.SHOW_HEADER:
            newState = state.set('showHeader', action.bool);
            break;

        default:
            newState = state;
            break;
    }
    
    return newState;
}