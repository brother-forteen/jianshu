import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavSearch,
    SearchInfo,
    SearchInfoTrending,
    SearchInfoHeader,
    SearchInfoTag,
    SearchInfoTagItem,
    SearchInfoItemLink,
    SearchInfoSwitch,
    NavSearchInput,
    Addition,
    Button
} from './style';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginLeft from './components/LoginLeft';
import LogoutLeft from './components/LogoutLeft';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const { focus, showHeader, handleInputFocus, handleInputBlur, list, isLogin } = this.props;
        return (
            <HeaderWrapper className={showHeader ? '' : 'hide-header'}>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    {
                        isLogin ? <LogoutLeft></LogoutLeft> : <LoginLeft></LoginLeft>
                    }
                    <NavSearch>
                        <CSSTransition
                            timeout={300}
                            in={focus}
                            classNames='slide'
                        >
                            <NavSearchInput
                                className={focus ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focus ? 'iconFocused iconfont icon' : 'iconfont icon'}>&#xe62b;</i>
                        {this.getListArea()}
                    </NavSearch>
                </Nav>
                <Addition>
                    <Button className='button_no_color'><i className="iconfont">&#xe636;</i></Button>
                    {
                        isLogin ? <Logout></Logout> : <Login></Login>
                    }
                    <Button className='writing'><i className="iconfont">&#xe62d;</i> 写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    
    getListArea() {
        const { focus, mouseIn, list, currentPage, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const currentPageList =  list.toJS().slice((currentPage -1) * 10, currentPage * 10);
        if(focus || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    <SearchInfoTrending>
                        <SearchInfoHeader>
                            热门搜索
                            <SearchInfoSwitch onClick={() => handleChangePage(currentPage, totalPage, this.spinIcon)}>
                                <i ref={(spin) => {this.spinIcon = spin}} className='iconfont iconSpin'>&#xe606;</i> 换一批
                            </SearchInfoSwitch>
                        </SearchInfoHeader>
                    
                        <SearchInfoTag>
                            {currentPageList.map((item, index) => {
                                    return (<SearchInfoTagItem key={index}><SearchInfoItemLink>{item}</SearchInfoItemLink></SearchInfoTagItem>)
                                })}
                        </SearchInfoTag>
                    </SearchInfoTrending>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focus: state.get('header').get('focus'),
        list: state.get('header').get('list'),
        currentPage: state.get('header').get('currentPage'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
        showHeader: state.getIn(['header', 'showHeader']),
        isLogin: state.getIn(['login', 'login'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (!list.size) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(currentPage, totalPage, spinIcon){
            let originRotate = parseInt(spinIcon.style.transform.replace(/[^0-9]/ig, '')) || 0;
            spinIcon.style.transform = `rotate(${originRotate + 360}deg)`;
            dispatch(actionCreators.changePage(currentPage, totalPage));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);