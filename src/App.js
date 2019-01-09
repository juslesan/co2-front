import React, { Component } from 'react';
import './index.css'
import SearchForm from './components/SearchForm.js'
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>CO2-EMISSIONS</h1>
        <SearchForm/>
        <p>Hello world!</p>
      </div>
    );
  }
}

export default App;
