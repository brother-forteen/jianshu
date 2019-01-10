import * as constants from './constants';
import axios from 'axios';

const getArticleDetailAction = (result) => ({
   type: constants.GET_ARTICLE_DETAIL,
   detail: result
});

export const getArticleDetail = (id) => (
    (dispatch) => {
        axios.get(`../api/articleDetail.json?id=${id}`).then(res => {
            if(res.data.status === 200){
                dispatch(getArticleDetailAction(res.data.result));
            }
        }).catch(err => {
            console.log(err);
        });
    }
);