import React, { Component } from 'react';
import './index.css'
import SearchForm from './components/SearchForm.js'
import Results from './components/Results.js'
import countryService from './services/country.js'
import PerCapita from './components/PerCapita';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField: '',
      error: '',
      country: null,
      perCapita: false,
    }
    
  }
  
  handleSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  handleSearch = (event) => {
    event.preventDefault()

    try {
      // console.log(this.state.searchField)
      
      countryService.getByName(this.state.searchField).then(searched => { 
        if (searched.error === undefined || searched.error === null) {
          // console.log(searched)
          
          this.setState({country: searched,
                        error: ''})
        } else {
          this.setState({error: searched.error,
                        country: null})
        }
      })
      }
      catch (exception) {
        this.setState({error: 'ERROR'})
    }
  }
  perCapitaHandler = () => {
    this.setState({perCapita: !this.state.perCapita})
  }

  render() {
    console.log(this.state.perCapita)
    return (
      <div className="container">
        <h1 className="header">CO2-EMISSIONS</h1>
        <SearchForm handleChange={this.handleSearchFieldChange} handleSubmit={this.handleSearch}/>
        <PerCapita handler={this.perCapitaHandler}/>
        <Results country={this.state.country} error={this.state.error} perCapita={this.state.perCapita}/>
      </div>
    );
  }
}

export default App;
