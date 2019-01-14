import React, {Component} from 'react'
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
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

    renderCountry = (country) => {
        // console.log(country)
        let emissions = undefined
        if (country !== null && country !== undefined) {
            if (this.props.perCapita) {
                emissions = jsonUtils.perCapita(country.info[1].data, country.info[0].data)
                emissions = jsonUtils.removeUntrackedYears(emissions)
                console.log(emissions)
            } else {
            emissions = jsonUtils.removeUntrackedYears(country.info[1].data)
            }
        }
        
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
                        <LineChart curve={false} data={emissions} />
                    </div>

                </div>      
                }
            </div>
        )
    }

    render () {
        // console.log(this.props.country)
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