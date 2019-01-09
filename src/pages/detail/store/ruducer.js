import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    article: {}
});

export default (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case constants.GET_ARTICLE_DETAIL:
            newState = state.set('article', action.detail);
            break;
            
        default:
            newState = state;
            break;
    }
    return newState;
}
