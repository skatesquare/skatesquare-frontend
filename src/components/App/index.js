import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import AppRouter from '../AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppRouter />
      </div>
    );
  }
}

export default App;
