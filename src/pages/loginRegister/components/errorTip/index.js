import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ErrorTipWrap,
    ErrorTipItem
} from './style.js';

class ErrorTip extends Component {
    render() {
        return(
            <ErrorTipWrap className={ this.props.showError ? 'show-error-msg' : ''}>
                <ErrorTipItem>{this.props.errorMsg}</ErrorTipItem>
            </ErrorTipWrap>
        )
    }
}

const mapStateToProps = (state) => ({
    errorMsg: state.getIn(['login', 'errorMsg']),
    showError: state.getIn(['login', 'showErrorBool'])
});
export default connect(mapStateToProps, null)(ErrorTip);