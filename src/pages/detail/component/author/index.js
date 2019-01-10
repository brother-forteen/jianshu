import React, { Component } from 'react';
import {
    AuthorWrapper,
    AuthorLink,
    AuthorBasicInfo
} from './style';

class AuthorInfo extends Component {
    render() {
        console.log(this.props);
        return (
            <AuthorWrapper>
                <AuthorLink href="/sss">
                    <img className='user-icon' src="//upload.jianshu.io/users/upload_avatars/14541860/9bfd93ca-9789-4b9e-9f4b-a90abab069b7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
                </AuthorLink>
                <AuthorBasicInfo>
                    <div>
                        <AuthorLink>
                            <span className='user-name'>倒到糖我在</span>
                        </AuthorLink>
                        <button><i className='iconfont'>&#xe611;</i>关注</button>
                    </div>
                    <div>
                        <span className='article-info'>2018.12.19 11:34*</span>
                        <span className='article-info'>字数 1016</span>
                        <span className='article-info'>阅读 871</span>
                        <span className='article-info'>评论 5</span>
                        <span className='article-info'>喜欢 10</span>
                    </div>
                    
                </AuthorBasicInfo>
            </AuthorWrapper>
        )
    }
}

export default AuthorInfo;