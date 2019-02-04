
const removeUntrackedYears = (emissions) => {
    // console.log(emissions)

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

const perCapita = (emissions, populations) => {
    const ret = {}
    const emissionValues = Object.values(emissions)
    const emissionKeys = Object.keys(emissions)
    const populationValues = Object.values(populations)
    // const populationKeys = Object.keys(populations)
    // console.log(emissionValues)
    // console.log(populationValues)

    for (let i = 0; i < emissionKeys.length; i++) {
        if (emissionValues[i] !== "" && populationValues[i] !== "") {
            ret[emissionKeys[i]] = parseFloat(emissionValues[i]) / parseFloat(populationValues[i])
        }
    }
    return ret
}


export default {removeUntrackedYears, perCapita}
