import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from './style';

class Topic extends Component {
    render(){
        const { topicList } = this.props;
        return(
            <TopicWrapper>
                {
                    topicList.map((item, index) => (
                        <TopicItem key={item.get('id')}>
                            <a target='_blank' href={item.get('href')} rel='noopener noreferrer'>
                                <img className={index !== topicList.size - 1 ? 'topic-pix img-show' : 'topic-pix img-hide'} src={item.get('imgUrl')} alt="64" />
                                <div className='topic-content'>{item.get('title')}</div>
                                <i className={index === topicList.size - 1 ? 'iconfont img-show' : 'iconfont img-hide'}>&#xe64d;</i>
                            </a>
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

const mapDispatchToProps = (dispatch) => {
    return {
    
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);