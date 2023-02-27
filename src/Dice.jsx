import React, { useState } from 'react';
import PrettyDisplay from './PrettyDisplay';

function Dice() {
    const [firstNumber, setFirstNumber] = useState(7);

    // let firstNumber = 7;
    // let secondNymber = 6;    

    function handleClick() {
        //firstNumber = firstNumber + 1;
        console.log("I was clicked")
        console.log(firstNumber)
    }

    return (<div onClick={handleClick}>Hello, I'm a dice component.  My value is <PrettyDisplay numberValue={firstNumber + secondNymber} ending={"?"}/></div>)
}




export default Dice;