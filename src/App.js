import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Header from './common/header/index';
class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <Iconfont />
                <Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <Header />
                            <div>
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/detail' exact  component={Detail}></Route>
                            </div>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
