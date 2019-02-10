import React, {Component} from 'react'
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import jsonUtils from '../utils/jsonUtils.js'


import './Results.css'

class Results extends Component {
    constructor(props) {
        super(props)    
        this.state = {
        }
        ReactChartkick.addAdapter(Chart)
    }

    // Render chart with superpowers
    renderSuperpowers = (country, superpowersData) => {
        let emissions = []
        if (country !== null && country !== undefined) {
            if (this.props.perCapita) {
                emissions = jsonUtils.searchedAndSuperpowersPerCapita(country, superpowersData)
            } else {
                emissions = jsonUtils.searchedAndSuperpowers(country, superpowersData)               
            }
        }
        return (
            this.resultsRender(country, emissions)
        )
    }

    // Render chart of a single searched country
    renderCountry = (country) => {
        // console.log(country)
        let emissions = undefined
        if (country !== null && country !== undefined) {
            if (this.props.perCapita) {
                emissions = jsonUtils.perCapita(country.info[1].data, country.info[0].data)
                emissions = jsonUtils.removeUntrackedYears(emissions)
                
            } else {
                emissions = jsonUtils.removeUntrackedYears(country.info[1].data)
            }
        }
        
        return (
            this.resultsRender(country, emissions)
        )
    }

    // HTML rendering function for all charts
    resultsRender(country, emissions) {
        return (
            <div className="renderResults">
                    {country === undefined || country === null ?

                        <h1 className="searchHeader">Search for emissions by country</h1>
                    
                    :
                    <div> 
                        <h1 className="searchHeader">{country.name}</h1>
                        {this.props.perCapita ? 
                            <p className="chartTitle">Emissions in kilotonnes per capita</p>
                        :
                            <p className="chartTitle">Emissions in kilotonnes</p>

                        }
                        <div className="emissionChart">
                            <LineChart dataset={{radius: 1.5}} curve={false} data={emissions} />
                        </div>

                    </div>      
                    }
            </div>
        )
    }

    render () {
        return (
            <div className="resultsWrapper">
                {this.props.error === '' ? // error check
                    
                    this.props.superpowers ? // Check if superpowers are to be rendered

                        this.renderSuperpowers(this.props.country, this.props.superpowersData)

                    :

                        this.renderCountry(this.props.country)

                :
                    <h1 className="searchHeader">{this.props.error}</h1>
                }
            </div>
        )
    }
}

export default Results