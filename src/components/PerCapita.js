import React from 'react'
import {Checkbox} from 'react-bootstrap'
import './PerCapita.css'
const PerCapita = ({handler}) => {
    return (
    <div className="perCapita">
        <Checkbox onClick={handler}>
            Per Capita
        </Checkbox>
    </div>
    )
}

export default PerCapita