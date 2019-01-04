import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavSearchInput,
    Addition,
    Button
} from './style';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavSearch>
                    <CSSTransition
                        timeout={300}
                        in={props.focus}
                        classNames='slide'
                    >
                        <NavSearchInput
                            className={props.focus ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <i className={props.focus ? 'iconFocused iconfont' : 'iconfont'}>&#xe62b;</i>
                </NavSearch>
            </Nav>
            <Addition>
                <Button className='button_no_color'><i className="iconfont">&#xe636;</i></Button>
                <Button className='button_no_color'>登陆</Button>
                <Button className='reg'>注册</Button>
                <Button className='writing'><i className="iconfont">&#xe62d;</i> 写文章</Button>
            </Addition>
        </HeaderWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        focus: state.header.get('focus')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);