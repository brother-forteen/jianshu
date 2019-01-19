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
import ErrorTip from './components/errorTip';

class Login extends Component {
    render() {
        const { showState } = this.props;
        return (
            <LoginWrapper>
                <ErrorTip></ErrorTip>
                
                <Link to='/'><Logo></Logo></Link>
                
                <LoginBox>
                    <LoginTitle>
                        <LoginTitleButton className={ showState === 'login' ?  'active' : ''}>登陆</LoginTitleButton>
                        <span>·</span>
                        <LoginTitleButton className={ showState === 'register' ?  'active' : ''}>注册</LoginTitleButton>
                    </LoginTitle>
                    
                    <FormContainer>
                        {
                            showState === 'login' ? <LoginForm></LoginForm> : <div>注册</div>
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