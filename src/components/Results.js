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

    renderSuperpowers = (country, superpowersData) => {
        let emissions = []
        if (country !== null && country !== undefined) {
            if (this.props.perCapita) {
                for (let i = 0; i < Object.keys(superpowersData).length; i++) {
                    let superpowerPerCapita = jsonUtils.perCapita(superpowersData[i].info[1].data, superpowersData[i].info[0].data)
                    superpowerPerCapita = jsonUtils.removeUntrackedYears(superpowerPerCapita)

                    emissions.push({
                        name: superpowersData[i].name,
                        data: superpowerPerCapita
                    })
                }  
                let searched = jsonUtils.perCapita(country.info[1].data, country.info[0].data)
                searched = jsonUtils.removeUntrackedYears(searched)
                emissions.push({
                    name: country.name,
                    data: searched
                })   
            } else {
                
                for (let i = 0; i < Object.keys(superpowersData).length; i++) {
                    let trackedSuperpowerData = jsonUtils.removeUntrackedYears(superpowersData[i].info[1].data)
                    emissions.push({
                        name: superpowersData[i].name,
                        data: trackedSuperpowerData
                    })
                }

                let searched = jsonUtils.removeUntrackedYears(country.info[1].data)

                emissions.push({
                    name: country.name,
                    data: searched
                })
            }                
        }
        // console.log(emissions)
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

    renderCountry = (country) => {
        // console.log(country)
        let emissions = undefined
        if (country !== null && country !== undefined) {
            if (this.props.perCapita) {
                emissions = jsonUtils.perCapita(country.info[1].data, country.info[0].data)
                emissions = jsonUtils.removeUntrackedYears(emissions)
                // console.log(emi  ssions)
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
                {this.props.error === '' ?
                    
                    this.props.superpowers ?

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