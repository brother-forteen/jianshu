import * as constants from './constants';
import axios from 'axios';

const changeLoginState = (bool) => ({
    type: constants.LOGIN_STATE,
    data: bool
});

const changeLoginParams = (params) => ({
    type: constants.LOGIN_PARAMS,
    data: params
});

export const login = (params) => (
    (dispatch) => {
        axios.get('/api/login.json',{ params: params }).then(res=> {
            if(res.status === 200){
                dispatch(changeLoginState(true));
            }
        }).catch(err => {
            console.log(err);
        })
    }
);

export const getStateParams = (params) => (
    (dispatch) => {
        dispatch(changeLoginParams(params));
    }
);

export const showErrorMsg = (msg) => (
    (dispatch) => {
        dispatch({
            type: constants.SHOW_ERROR_MSG,
            data: msg,
            bool: true
        });
        
        setTimeout(function () {
            dispatch({
                type: constants.SHOW_ERROR_MSG,
                data: '',
                bool: false
            });
        }, 1500)
    }
);