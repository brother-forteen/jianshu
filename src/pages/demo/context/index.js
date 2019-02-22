import React, { Component } from 'react';
import Toolbar from './Toolbar';
import { themes } from "./constents";
import { ThemeContext } from './theme-context';


class ToolBarIndex extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme.bind(this)
        };
    }
    
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar></Toolbar>
                </ThemeContext.Provider>
            </div>
            
        )
    }
    
    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === themes.light ? themes.dark : themes.light
        })
    }
}
export default ToolBarIndex;


