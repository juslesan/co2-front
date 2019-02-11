const jsonUtils = require('./jsonUtils.js')


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

test('All empty emission years are removed fron data JSON', ()  => {
    const removed = jsonUtils.removeUntrackedYears(mockSearched.info[1].data)
    // console.log(removed)
    expect(removed['1965']).toEqual('25327.969')
    expect(removed['1966']).toEqual(undefined)
})

test('All empty population years are removed fron data JSON', ()  => {
    const removed = jsonUtils.removeUntrackedYears(mockSearched.info[0].data)
    // console.log(removed)
    expect(removed['1963']).toEqual('4523309')
    expect(removed['1964']).toEqual(undefined)
})

test('Per capita works', () => {
    const perCapita = jsonUtils.perCapita(mockSearched.info[1].data, mockSearched.info[0].data)
    // console.log(perCapita)
    expect(perCapita['1964']).toEqual(undefined) // Does not calculate untrackeds
    expect(perCapita['1960']).toEqual(0.003409846727743195)
    expect(perCapita['1961']).toEqual(0.0033488772148876768)
    expect(perCapita['1962']).toEqual(0.0037425673664343503)
    expect(perCapita['1963']).toEqual(0.004279630907373341)
})

test('Superpowers and serched added to same json', () => {
    const res = jsonUtils.searchedAndSuperpowers(mockSearched, mockSuperpowers)
    expect(res.length).toEqual(5)
})

test('Superpowers and serched added to same json per capita', () => {
    const res = jsonUtils.searchedAndSuperpowersPerCapita(mockSearched, mockSuperpowers)
    console.log(res)
    expect(res.length).toEqual(5)
    expect(res[0].data['1960']).toEqual(0.003409846727743195)
    expect(res[1].data['1960']).toEqual(0.003409846727743195)
    expect(res[2].data['1960']).toEqual(0.003409846727743195)
    expect(res[3].data['1960']).toEqual(0.003409846727743195)
    expect(res[4].data['1960']).toEqual(0.003409846727743195)

})