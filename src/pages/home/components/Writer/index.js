import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WritterUl,
    WritterLi
} from './style';

class Writer extends Component {
    render(){
        const { writerList, changeWriter } = this.props;
        return(
            <WriterWrapper>
                <div className='title'>
                    <span>推荐作者</span>
                    <button onClick={() => (changeWriter(this.iconChange))}>换一批<i ref={(icon) => this.iconChange = icon} className='iconfont'>&#xe606;</i></button>
                </div>
                <WritterUl>
                    {
                        writerList.map((item) => (
                            <WritterLi key={item.get('id')}>
                                <a href="/#">
                                    <img src={item.get('iconUrl')} alt=""/>
                                </a>
                                <div className='userInfo'>
                                    <a href="/#">
                                        <p className='name'>{item.get('userName')}</p>
                                    </a>
                                    <p className='content'>写了{item.get('worldNum')}字·{item.get('like')}k喜欢</p>
                                </div>
                                <a href="/#" className='attention'><i className='iconfont'>&#xe611;</i>关注</a>
                            </WritterLi>
                        ))
                    }
                    <button className='writer-check-all'>查看全部 <i className='iconfont'>&#xe64d;</i></button>
                </WritterUl>
            </WriterWrapper>
        )
    }
}

const mapStateTopProps = (state) => ({
    writerList: state.get('home').get('writerList')
});

const mapDispatchToProps = (dispatch) => ({
    changeWriter(icon){
        let newRotate = parseInt(icon.style.transform.replace(/[^0-9]/ig, '')) || 0;
        icon.style.transform = `rotate(${newRotate + 360}deg`;
    }
});

export default connect(mapStateTopProps, mapDispatchToProps)(Writer);