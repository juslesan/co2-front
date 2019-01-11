import React, {Component} from 'react'

class Results extends Component {
    constructor(props) {
        super(props)    
        this.state = {
        }
    }

    renderCountry = (country) => {
        return (
            <div className="renderResults">
                {country === undefined || country === null ?

                    <h1>Search for emissions by country</h1>

                :
                <div>
                    <h1>{country.name}</h1>
                    {/* <p>{country.populations}</p> */}
                    {/* <p>{country.emissions}</p> */}
                </div>      
                }
            </div>
        )
    }
    render () {
        // console.log(this.props.error)
        return (
            <div className="resultsWrapper">
                {this.props.error === '' ?
                    
                    
                    this.renderCountry(this.props.country)
                    :
                    <h1>{this.props.error}</h1>


                }
            </div>
        )
    }
}

export default Results