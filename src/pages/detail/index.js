import React, { Component } from 'react';
import {
    DetailWrapper,
    DetailTitle,
    DetailContent
} from './style';
import AuthorInfo from './component/author';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
    render() {
        const { article } = this.props;
        return (
            <DetailWrapper>
                <DetailTitle>
                    {article.title}
                </DetailTitle>
                
                <AuthorInfo userInfo={article.userInfo} like={100}>
                
                </AuthorInfo>
                
                <DetailContent dangerouslySetInnerHTML={{__html: article.content}}>
                
                </DetailContent>
            </DetailWrapper>
        )
    }
    
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    article: state.getIn(['detail', 'article'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getArticleDetail(id))
    }
});

export  default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));