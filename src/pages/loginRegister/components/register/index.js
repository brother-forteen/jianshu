import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    InputWrap,
    InputItem,
    LoginButton,
    SingUpMsg,
    MoreSign,
    MoreSignTitle,
    MoreSignItemWrap,
    MoreSignItem,
    IconImg
} from './style';
import iconWeibo from "../../../../statics/images/icon2.png";
import iconWeChat from "../../../../statics/images/icon5.png";
import iconWeQQ from "../../../../statics/images/icon4.png";
import {actionCreators} from "../../store";
class RegisterForm extends Component{
    render() {
        return (
            <Fragment>
                <InputWrap>
                    <i className='iconfont'>&#xe631;</i>
                    <InputItem ref={(account) => this.account = account} type='text' className='input-text' placeholder='昵称' />
                </InputWrap>
                <InputWrap>
                    <i className='iconfont'>&#xe628;</i>
                    <InputItem ref={(account) => this.account = account} type='text' className='input-text' placeholder='手机号' />
                </InputWrap>
                <InputWrap>
                    <i className='iconfont'>&#xe620;</i>
                    <InputItem ref={(password) => this.password = password} type='password' className='input-text' placeholder='设置密码'/>
                </InputWrap>
                <LoginButton>注册</LoginButton>
                <SingUpMsg>
                    点击 “注册” 即表示您同意并愿意遵守简书<br />
                    <a href="">用户协议</a> 和 <a href="">隐私政策</a> 。
                </SingUpMsg>
                <MoreSign>
                    <MoreSignTitle>社交账号直接注册</MoreSignTitle>
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

export default connect(null, mapDispatchToProps)(RegisterForm);