import React, { Component } from 'react';
//import TestComp from './components/test-component';
//import logo from '../svg/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          {/*<img src={logo || ''} className='App-logo' alt='logo' />*/}
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<TestComp/>*/}
      </div>
    );
  }
}

export default App;
