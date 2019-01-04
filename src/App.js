import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header/index';
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Iconfont />
        <Header />
      </div>
    );
  }
}

export default App;
