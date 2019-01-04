import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header/index';
class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <Iconfont />
                <Provider store={store}>
                    <Header />
                </Provider>
            </div>
        );
    }
}

export default App;
