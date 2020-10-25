import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import employees from './employees.json';

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
