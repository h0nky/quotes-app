import React, { Component } from 'react';
import Router from './components/Router';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Router />
      </div>
    );
  }
}

export default App;
