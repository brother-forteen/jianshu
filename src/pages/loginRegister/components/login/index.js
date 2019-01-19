import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    InputWrap,
    InputItem,
    LoginExtra,
    LoginButton,
    MoreSign,
    MoreSignTitle,
    MoreSignItemWrap,
    MoreSignItem,
    IconImg
} from './style';

import iconWeibo from '../../../../statics/images/icon2.png';
import iconWeChat from '../../../../statics/images/icon5.png';
import iconWeQQ from '../../../../statics/images/icon4.png';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

class LoginForm extends Component {
    render() {
        const { login } = this.props;
        return(
            <Fragment>
                <InputWrap>
                    <i className='iconfont'>&#xe631;</i>
                    <InputItem ref={(account) => this.account = account} type='text' className='input-text' placeholder='手机号或邮箱' />
                </InputWrap>
                <InputWrap>
                    <i className='iconfont'>&#xe620;</i>
                    <InputItem ref={(password) => this.password = password} type='password' className='input-text' placeholder='密码'/>
                </InputWrap>
                <LoginExtra>
                    <InputItem ref={(rememberMe) => this.rememberMe = rememberMe} type="checkbox"/>
                    <span>记住我</span>
                    <Link to='/'>登陆遇到问题？</Link>
                </LoginExtra>
                <LoginButton onClick={() => {login(this.account, this.password, this.rememberMe)}}>登陆</LoginButton>
                <MoreSign>
                    <MoreSignTitle>社交账号登陆</MoreSignTitle>
                    <MoreSignItemWrap>
                        <MoreSignItem><Link to='/'><IconImg src={iconWeibo} /></Link></MoreSignItem>
                        <MoreSignItem><Link to='/'><IconImg src={iconWeChat} /></Link></MoreSignItem>
                        <MoreSignItem><Link to='/'><IconImg src={iconWeQQ} /></Link></MoreSignItem>
                        <MoreSignItem>其他</MoreSignItem>
                    </MoreSignItemWrap>
                </MoreSign>
            </Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    login(account, password, remember){
        let params = {
            account: account.value,
            password: password.value,
            remember: remember.checked
        };
        
        let errMsg = '';
        for(let key in params){
            if(key === 'account' && !params[key]){
                errMsg = '请填写用户名或邮箱';
            }else if(key === 'password' && !params[key]){
                errMsg = '请填写密码';
            }
            !!errMsg && dispatch(actionCreators.showErrorMsg(errMsg));
        }
        !errMsg && dispatch(actionCreators.login(params));
        
    }
});

export default connect(null, mapDispatchToProps)(LoginForm);