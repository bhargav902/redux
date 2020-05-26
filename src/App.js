import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Posts from './component/Posts'


import Postfrom from './component/Postfrom';

import store from './store';

class App extends React.Component {
  render(){
  return (
    <Provider store={store}> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          
        
      </header>
      <Postfrom />
      <hr />

      <Posts />
    </div>
    </Provider>
  );
  }
}

export default App;
