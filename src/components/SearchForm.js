import React from 'react'
import {FormGroup} from 'react-bootstrap'
import './SearchForm.css'
import searchIcon from '../img/icon_search.png'

// Renders the search form
const SearchForm = ({ handleSubmit, handleChange}) => {

  return (
    <div className="searchWrapper">
      <form onSubmit={handleSubmit}>
        <FormGroup className="searchForm">
          
          <input type="text" placeholder="Search for a country" name="search" onChange={handleChange}/>
          
          <button className="searchSubmit" type="submit" onClick={handleSubmit} id='search'>
            <img alt="Search" src={searchIcon}></img>
          </button>

        </FormGroup>
      </form>
    </div>
  )

}


export default SearchForm