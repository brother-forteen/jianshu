import React, { Component, Fragment } from 'react';
import { NavItem } from "./style";

class LoginLeft extends Component {
    render(){
        return(
            <Fragment>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
            </Fragment>
        )
    }
}

export default LoginLeft;