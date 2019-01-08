import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendLink,
    RecommendItem
} from './style';

class Recommend extends Component {
    render(){
        const { recommendList } = this.props;
        return(
            <RecommendWrapper>
                {
                    recommendList.map((item) => (
                        <RecommendLink href={item.get('href')} key={item.get('id')}>
                            <RecommendItem imgUrl={item.get('imgUrl')}></RecommendItem>
                        </RecommendLink>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const  mapStateToProps = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
});

export default connect(mapStateToProps, null)(Recommend);