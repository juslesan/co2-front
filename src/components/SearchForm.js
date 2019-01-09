import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'
import './SearchForm.css'

// Renders login form
const SearchForm = ({ handleSubmit, loginMessage, handleChange, username, password, reCaptcha, reCaptchaExpire, verified }) => {


  verified = true;

  return (
    <div className="searchWrapper">
      <form onSubmit={handleSubmit}>
        <FormGroup className="searchForm">
          {/* <ControlLabel>Käyttäjätunnus: </ControlLabel> */}
          <FormControl
            className="loginInput"
            // value={username}
            // onChange={null}
            name="search"
          />

          <Button className="loginSubmit" type="submit" bsStyle="success" disabled={!verified} onClick={handleSubmit} id='login'>Hae</Button>

        </FormGroup>
      </form>

      <div className="message">
        {loginMessage}
      </div>
    </div>
  )

}


export default SearchForm