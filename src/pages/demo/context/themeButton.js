import React, { Component } from 'react';
import { ThemeContext } from './theme-context';

class ThemeButton extends Component{
    render(){
        return(
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button
                        onClick={ toggleTheme }
                        style={{background: theme.background, color: theme.foreground, marginTop: '30px'}}>
                        Toggle Theme
                    </button>
                )}
            </ThemeContext.Consumer>
        )
    }
}
export default ThemeButton;

