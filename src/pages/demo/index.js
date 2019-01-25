import React, { Component } from 'react';
import {
    DemoWrap
} from './style';

import TemperatureInput from './temperatureInput';

class Demo extends Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.toCelsius = this.toCelsius.bind(this);
        this.toFahrenheit = this.toFahrenheit.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;


        return(
            <DemoWrap>
                <TemperatureInput scale='c' temperature={ celsius } onTemperatureChange={ this.handleCelsiusChange }></TemperatureInput>
                <TemperatureInput scale='f' temperature={ fahrenheit } onTemperatureChange={ this.handleFahrenheitChange }></TemperatureInput>
            </DemoWrap>
        )
    }

    handleCelsiusChange (temperature){
        this.setState({
            scale: 'c',
            temperature: temperature
        })
    }

    handleFahrenheitChange (temperature){
        this.setState({
            scale: 'f',
            temperature: temperature
        })
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
}


// class Demo extends Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     render(){
//         return (
//             <DemoWrap>
//                 <form onSubmit={ this.handleSubmit }>
//                     <label htmlFor="">
//                         upload file:
//                         <input type="file" ref={ (file) => this.fileInput = file } />
//                     </label>
//
//                     <button type='submit'>Submit</button>
//                 </form>
//             </DemoWrap>
//         )
//     }
//
//     handleSubmit(e){
//         e.preventDefault();
//         console.log(this.fileInput.files);
//     }
// }

export default Demo;