import React, { Component } from 'react';
import './App.css';
import EmployeesTable from './components/EmployeesTable';
import Wrapper from './components/Wrapper';
import employees from './employees.json';
import DataTable from 'react-data-table-component';

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <Wrapper />

    );
  }
}

export default App;
