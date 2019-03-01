import React, { Component } from 'react';
import {
    Download
} from './style';
import qrcode from '../../../../statics/images/qrcode.png';

class Advertisement extends Component {
    render(){
        return(
            <Download>
                <img className='qrcode' src={ qrcode } alt="Download index side qrcode"/>
                <div className='info'>
                    <div className='title'>下载简书手机App<i className='iconfont'>&#xe64d;</i></div>
                    <div className='description'>随时随地发现和创作内容</div>
                </div>
                
                <div className='qrcode-hover'>
                    <img className='qrcode' src={ qrcode } alt="Download index side qrcode"/>
                </div>
            </Download>
        )
    }
}
export default Advertisement;