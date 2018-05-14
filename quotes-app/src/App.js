import React, { Component } from 'react';
import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Router />
          <Footer />
      </div>
    );
  }
}

export default App;
