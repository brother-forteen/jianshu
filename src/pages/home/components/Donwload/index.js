import React, { Component } from 'react';
import {
    Download
} from './style';

class Advertisement extends Component {
    render(){
        return(
            <Download>
                <img className='qrcode' src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode"/>
                <div className='info'>
                    <div className='title'>下载简书手机App<i className='iconfont'>&#xe64d;</i></div>
                    <div className='description'>随时随地发现和创作内容</div>
                </div>
                
                <div className='qrcode-hover'>
                    <img className='qrcode' src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode"/>
                </div>
            </Download>
        )
    }
}
export default Advertisement;