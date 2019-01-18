import React, { Component } from 'react';
import AppRouter from './AppRouter';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <AppRouter />
      </div>
    );
  }
}

export default App;
