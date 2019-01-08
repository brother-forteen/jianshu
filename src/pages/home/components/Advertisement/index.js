import React, { Component } from 'react';
import {
    AdvertisementLink
} from './style';

class Advertisement extends Component {
    render(){
        return(
            <AdvertisementLink imgUrl={this.props.imgUrl} href={this.props.href}>
                <span>广告</span>
            </AdvertisementLink>
        )
    }
}
export default Advertisement;