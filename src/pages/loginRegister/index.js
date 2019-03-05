import React, { Component } from 'react';
import {
    LoginWrapper,
    Logo,
    LoginBox,
    LoginTitle,
    LoginTitleButton,
    FormContainer
} from './style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import ErrorTip from './components/errorTip';

class Login extends Component {
    render() {
        const { showState, getDetail } = this.props;
        return (
            <LoginWrapper>
                <ErrorTip></ErrorTip>
                
                <Link to='/'><Logo></Logo></Link>
                
                <LoginBox>
                    <LoginTitle>
                        <Link to='/login/login'><LoginTitleButton onClick={() => getDetail('login')} className={ showState === 'login' ?  'active' : ''}>登陆</LoginTitleButton></Link>
                        <span>·</span>
                        <Link to='/login/register'><LoginTitleButton onClick={() => getDetail('register')} className={ showState === 'register' ?  'active' : ''}>注册</LoginTitleButton></Link>
                    </LoginTitle>
                    
                    <FormContainer>
                        {
                            showState === 'login' ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>
                        }
                    </FormContainer>
                </LoginBox>
            </LoginWrapper>
        )
    }
    
    componentDidMount() {
        this.props.getDetail(this.props.match.params.params);
    }
}

const mapStateToProps = (state) => ({
    showState: state.getIn(['login', 'showState'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(params){
        dispatch(actionCreators.getStateParams(params));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));