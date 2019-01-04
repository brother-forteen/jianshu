import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
        
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    <NavSearch>
                        <CSSTransition
                            timeout={300}
                            in={this.state.focus}
                            classNames='slide'
                        >
                            <NavSearchInput
                                className={this.state.focus ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={this.state.focus ? 'iconFocused iconfont' : 'iconfont'}>&#xe62b;</i>
                    </NavSearch>
                </Nav>
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Button className='writing'><i className="iconfont">&#xe62d;</i> 写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    
    handleInputFocus(){
        this.setState({
            focus: true
        })
    }
    handleInputBlur(){
        this.setState({
            focus: false
        })
    }
}
export default Header;