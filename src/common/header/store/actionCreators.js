import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (currentPage, totalPage) => ({
    type: constants.PAGE_CHANGE,
    currentPage,
    totalPage
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            if(res.data.status === 200){
                dispatch(changeList(res.data.result));
            }
        }).catch((err) => {
            console.log(err);
        })
    }
};