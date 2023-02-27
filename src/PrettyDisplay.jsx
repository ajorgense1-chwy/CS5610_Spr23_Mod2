import React from 'react';


import './PrettyDisplay.css'

/*
    props:
        -numberValue
*/

function PrettyDisplay(props) {

    return (<div className='prettyDisplay'>{props.numberValue}{props.ending}</div>)

}

export default PrettyDisplay;