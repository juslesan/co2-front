import React from 'react'
import './Superpowers.css'

// Renders superpower checkbutton
const Superpowers = ({superpowers, handler}) => {

    return (
    
    <div className="superpowers">
        {superpowers ?
            <button className="superpowerCheckButtonTrue" onClick={handler}></button>
        :
            <button className="superpowerCheckButtonFalse" onClick={handler}></button>
        }
        <p>Compare to superpowers</p>

    </div>
    )
}

export default Superpowers