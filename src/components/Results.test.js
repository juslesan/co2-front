import React from 'react'
import { shallow } from 'enzyme'
import Results from './Results'

const mockSearched = {
    name: "Finland",
    info: [{
        name: "populations",
        data: {
            1960: "4429634",
            1961: "4461005",
            1962: "4491443",
            1963: "4523309",
            1964: "",
            1965: "",
            1966: "",
            1967: ""
            }
        },
        {
        name: "emissions",
        data: {
            1960: "15104.373",
            1961: "14939.358",
            1962: "16809.528",
            1963: "19358.093",
            1964: "22852.744",
            1965: "25327.969",
            1966: "",
            1967: "",
            }
        }
    ]
}
const mockSuperpowers = [
    {
        name: "China",
        info: [{
            name: "populations",
            data: {
                1960: "4429634",
                1961: "4461005",
                1962: "4491443",
                1963: "4523309",
                1964: "",
                1965: "",
                1966: "",
                1967: ""
                }
            },
            {
            name: "emissions",
            data: {
                1960: "15104.373",
                1961: "14939.358",
                1962: "16809.528",
                1963: "19358.093",
                1964: "22852.744",
                1965: "25327.969",
                1966: "",
                1967: "",
                }
            }
        ]
    },
    {
        name: "USA",
        info: [{
            name: "populations",
            data: {
                1960: "4429634",
                1961: "4461005",
                1962: "4491443",
                1963: "4523309",
                1964: "",
                1965: "",
                1966: "",
                1967: ""
                }
            },
            {
            name: "emissions",
            data: {
                1960: "15104.373",
                1961: "14939.358",
                1962: "16809.528",
                1963: "19358.093",
                1964: "22852.744",
                1965: "25327.969",
                1966: "",
                1967: "",
                }
            }
        ]
    },
    {
        name: "Germany",
        info: [{
            name: "populations",
            data: {
                1960: "4429634",
                1961: "4461005",
                1962: "4491443",
                1963: "4523309",
                1964: "",
                1965: "",
                1966: "",
                1967: ""
                }
            },
            {
            name: "emissions",
            data: {
                1960: "15104.373",
                1961: "14939.358",
                1962: "16809.528",
                1963: "19358.093",
                1964: "22852.744",
                1965: "25327.969",
                1966: "",
                1967: "",
                }
            }
        ]
    },
    {
        name: "Russia",
        info: [{
            name: "populations",
            data: {
                1960: "4429634",
                1961: "4461005",
                1962: "4491443",
                1963: "4523309",
                1964: "",
                1965: "",
                1966: "",
                1967: ""
                }
            },
            {
            name: "emissions",
            data: {
                1960: "15104.373",
                1961: "14939.358",
                1962: "16809.528",
                1963: "19358.093",
                1964: "22852.744",
                1965: "25327.969",
                1966: "",
                1967: "",
                }
            }
        ]
    }
]

describe.only('<Results />', () => {
    
    it('Renders error', () => {

        const mockHandler = jest.fn()
        const resultsComponent = shallow(<Results error={'error'}/>)
        const contentDiv = resultsComponent.find('.searchHeader')
        expect(contentDiv.html()).toContain("error")

    })

    it('Renders results without options', () => {
        const resultsComponent = shallow(<Results country={mockSearched} error={""} perCapita={false} superpowers={false} superpowersData={mockSuperpowers}/>)
        const contentDiv = resultsComponent.find('.renderResults')
        expect(contentDiv.html()).toContain("Emissions in kilotonnes")
    })

    it('Renders results perCapita', () => {
        const resultsComponent = shallow(<Results country={mockSearched} error={""} perCapita={true} superpowers={false} superpowersData={mockSuperpowers}/>)
        const contentDiv = resultsComponent.find('.renderResults')
        expect(contentDiv.html()).toContain("Emissions in kilotonnes per capita")
    })

})