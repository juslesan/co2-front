import React from 'react'
import './PerCapita.css'
const PerCapita = ({perCapita, handler}) => {

    return (
    
    <div className="perCapita">
        {perCapita ?
        <button className="perCapitaCheckButtonTrue" onClick={handler}>
        </button>

        :
        <button className="perCapitaCheckButtonFalse" onClick={handler}>
        </button>
        
        }
        <p>Per capita</p>

    </div>
    )
}

export default PerCapita