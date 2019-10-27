import React, { Component } from 'react';
import './App.scss';
import Home from "./page/home/index.jsx";


class App extends Component {
  render () {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
