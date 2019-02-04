import React, { Component } from 'react';
import './index.css'
import SearchForm from './components/SearchForm.js'
import Results from './components/Results.js'
import countryService from './services/country.js'
import superpowersService from './services/superpowers.js'
import PerCapita from './components/PerCapita';
import Superpowers from './components/Superpowers';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      superpowersData: [],
      searchField: '',
      error: '',
      country: null,
      perCapita: false,
      superpowers: false
    }
    
  }

  componentDidMount() {
    superpowersService.getSuperpowers().then(countries =>
      this.setState({superpowersData: countries })
    )
  }


  handleSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  handleSearch = (event) => {
    event.preventDefault()

    try {
      
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

  superpowersHandler = () => {
    this.setState({superpowers: !this.state.superpowers})
  }
  render() {
    // console.log(this.state.superpowerData)
    return (
      <div className="container">
        <div className="headerDiv">
          <h1 className="header">CO² -EMISSIONS</h1>
          <SearchForm handleChange={this.handleSearchFieldChange} handleSubmit={this.handleSearch}/>
          <div className="checkboxes">
            <PerCapita perCapita={this.state.perCapita} handler={this.perCapitaHandler}/>
            <Superpowers superpowers={this.state.superpowers} handler={this.superpowersHandler}/>
          </div>
        </div>
        <Results country={this.state.country} error={this.state.error} perCapita={this.state.perCapita} superpowers={this.state.superpowers} superpowersData={this.state.superpowersData}/>
      </div>
    );
  }
}

export default App;
