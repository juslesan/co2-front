
// Removes all years from emissions with empty emissions

const removeUntrackedYears = (emissions) => {
    const values = Object.values(emissions)
    const keys = Object.keys(emissions)

    const ret = {}

    for (let i = 0; i < keys.length; i++) {
        if (values[i] !== "") {
            // console.log(keys[i])
            ret[keys[i]] = values[i]
        }
    }

    return ret
}

// Removes all years after the latest year with recorded emissions
// WIP
const removeUntrackedUpperYears = (emissions) => {
    const values = Object.values(emissions)
    const keys = Object.keys(emissions)
    // console.log(keys)

    const ret = {}

    for (let i = 0; i < keys.length; i++) {
        if (values[i] !== "") {
            // console.log(keys[i])
            ret[keys[i]] = values[i]
        }
    }

    return ret
}

// Counts emissions per capita and returns new emissions
const perCapita = (emissions, populations) => {
    const ret = {}
    const emissionValues = Object.values(emissions)
    const emissionKeys = Object.keys(emissions)
    const populationValues = Object.values(populations)

    for (let i = 0; i < emissionKeys.length; i++) {
        if (emissionValues[i] !== "" && populationValues[i] !== "") {
            ret[emissionKeys[i]] = parseFloat(emissionValues[i]) / parseFloat(populationValues[i])
        }
    }
    return ret
}

// Adds superpowers and a searched country to the same data json for graphing
const searchedAndSuperpowers = (searchedCountry, superpowers) => {
    let emissions = []
    for (let i = 0; i < Object.keys(superpowers).length; i++) {
        let trackedSuperpowerData = removeUntrackedYears(superpowers[i].info[1].data)
        emissions.push({
            name: superpowers[i].name,
            data: trackedSuperpowerData
        })
    }

    let searched = removeUntrackedYears(searchedCountry.info[1].data)
    emissions.push({
        name: searchedCountry.name,
        data: searched
    })

    return emissions
} 

// Adds superpowers and a searched country to the same data json for graphing per capita
const searchedAndSuperpowersPerCapita = (searchedCountry, superpowers) => {
    let emissions = []
    for (let i = 0; i < Object.keys(superpowers).length; i++) {
        let superpowerPerCapita = perCapita(superpowers[i].info[1].data, superpowers[i].info[0].data)
        superpowerPerCapita = removeUntrackedYears(superpowerPerCapita)

        emissions.push({
            name: superpowers[i].name,
            data: superpowerPerCapita
        })
    }  
    
    let searched = perCapita(searchedCountry.info[1].data, searchedCountry.info[0].data)
    searched = removeUntrackedYears(searched)
    emissions.push({
        name: searchedCountry.name,
        data: searched
    })  

    return emissions
}


export default {removeUntrackedYears, perCapita, removeUntrackedUpperYears, searchedAndSuperpowers, searchedAndSuperpowersPerCapita}
