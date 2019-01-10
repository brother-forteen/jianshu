import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
        ListWrapper,
        ListItem,
        ListInfo,
        ListImg,
        ListA,
        ListContent,
        ListMeta,
        LoadMore
} from './style';

import { actionCreators } from './../../store';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const { articleList, getMoreData, currentPage } = this.props;
        return(
            <Fragment>
                <ListWrapper>
                    {
                        articleList.map((item, index) => (
                            <ListItem key={index}>
                                <ListInfo className={!!item.get('imgUrl') ? '' : 'padding-right-no_pic'}>
                                    <Link to={`/detail/${item.get('id')}`} className='list-title'>{item.get('title')}</Link>
                                    <ListContent>{item.get('content')}</ListContent>
                                </ListInfo>
                                <ListA className={!!item.get('imgUrl') ? 'img-show list-img' : 'img-hide list-img'}>
                                    <ListImg  src={item.get('imgUrl')} />
                                </ListA>
                                <ListMeta>
                                    <ListA href={item.get('resourceUrl')} className='icon-meta'>{item.get('resource')}</ListA>
                                    <ListA className='icon-meta'><i className='iconfont'>&#xe66f;</i>{item.get('reply')}</ListA>
                                    <span><i className='iconfont'>&#xe6ab;</i>{item.get('awesome')}</span>
                                    <span><i className='iconfont'>&#xe630;</i>{item.get('bounty')}</span>
                                </ListMeta>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
                <LoadMore onClick={() => getMoreData(currentPage)}>阅读更多</LoadMore>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    currentPage: state.getIn(['home', 'currentPage'])
});

const mapDispatchToProps = (dispatch) => ({
    getMoreData(currentPage){
        dispatch(actionCreators.getMoreData(currentPage));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);