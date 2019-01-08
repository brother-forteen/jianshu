import * as constants from './constants'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList:[],
    currentPage: 1
});

export default (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            newState = state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            });
            break;
            
        case constants.ADD_ARTICLE_LIST:
            newState = state.merge({
                articleList: state.get('articleList').concat(fromJS(action.articleList)),
                currentPage: action.currentPage
            });
            break;
            
        default:
            newState = state;
            break;
    }
    return newState;
}