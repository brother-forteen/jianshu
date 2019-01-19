import { combineReducers } from 'redux-immutable';
import { reducer as headReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as sideReducer } from '../common/side/store';
import { reducer as articleReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/loginRegister/store';


const reducer = combineReducers({
    header: headReducer,
    home: homeReducer,
    side: sideReducer,
    detail: articleReducer,
    login: loginReducer
});
export default reducer;