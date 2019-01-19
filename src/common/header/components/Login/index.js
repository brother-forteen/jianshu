import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {
    Button
} from './style';

import { actionCreators } from './../../store';

import { connect } from 'react-redux'

class Login extends Component{
    render(){
        const { hideHeaderFun } = this.props;
        return(
            <Fragment>
                <Link to='/login/login'><Button onClick={ () => hideHeaderFun() } className='button_no_color'>登陆</Button></Link>
                <Link to='/login/register'><Button onClick={ () => hideHeaderFun() } className='reg'>注册</Button></Link>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    hideHeaderFun(){
        dispatch(actionCreators.showHeader(false));
    }
});

export default connect(null, mapDispatchToProps)(Login);
