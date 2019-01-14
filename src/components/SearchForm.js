import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'
import './SearchForm.css'

// Renders login form
const SearchForm = ({ handleSubmit, loginMessage, handleChange}) => {

  return (
    <div className="searchWrapper">
      <form onSubmit={handleSubmit}>
        <FormGroup className="searchForm">
          <FormControl
            className="searchInput"
            // value={"name"}
            onChange={handleChange}
            name="search"
            placeholder="Search for a country"
          />

          <Button className="searchSubmit" type="submit" bsStyle="success" onClick={handleSubmit} id='search'>Go</Button>

        </FormGroup>
      </form>

      <div className="message">
        {loginMessage}
      </div>
    </div>
  )

}


export default SearchForm