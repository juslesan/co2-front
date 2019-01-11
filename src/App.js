import React, { Component } from 'react';
import './index.css'
import SearchForm from './components/SearchForm.js'
import Results from './components/Results.js'
import countryService from './services/country.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField: '',
      error: '',
      country: null,

    }
    
  }
  
  handleSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  handleSearch = (event) => {
    event.preventDefault()

    try {
      console.log(this.state.searchField)
      
      countryService.getByName(this.state.searchField).then(searched => { 
        if (searched.error === undefined || searched.error === null) {
          console.log(searched)
          
          this.setState({country: searched,
                        error: ''})
        } else {
          this.setState({error: searched.error,
                        country: null})
        }
      })
 
      // .then(deletedBlog => {
      //   this.componentDidMount()
      }
      catch (exception) {
        this.setState({error: 'ERROR'})
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">CO2-EMISSIONS</h1>
        <SearchForm handleChange={this.handleSearchFieldChange} handleSubmit={this.handleSearch}/>
        <Results country={this.state.country} error={this.state.error}/>
      </div>
    );
  }
}

export default App;
