import React, { Component } from 'react';
import { scaleNames } from './constants';

class TemperatureInput extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    render() {
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>enter temperature in {scaleNames[scale]}</legend>
                <input type="text" value={ this.props.temperature } onChange={ this.handleChange }/>
            </fieldset>
        )
    }
    
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
}

export default TemperatureInput;