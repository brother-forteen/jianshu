import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
});

const addMoreArticleList = (result, currentPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    articleList: result.articleList,
    currentPage: currentPage
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('./api/home.json').then(res => {
            if(res.data.status === 200){
                dispatch(changeHomeData(res.data.result));
            }
        }).catch(err => {
            console.log(err);
        });
    }
};

export const getMoreData = (currentPage) => (
    (dispatch) => {
        axios.get(`./api/homeList.json?currentPage=${currentPage}`).then(res => {
            if(res.data.status === 200){
                dispatch(addMoreArticleList(res.data.result, (currentPage + 1)));
            }
        }).catch(err => {
            console.log(err);
        });
    }
);

