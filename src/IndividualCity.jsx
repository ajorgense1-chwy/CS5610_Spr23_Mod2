import React, { useState, useContext } from 'react';
import { CityData } from './CityContext';

import './IndividualCity.css'

function IndividualCity(props) {

    // let isSelected = false;
    //const [firstMovie, secondMOvie] = ['star wars', 'avengers', 'blade runner'];
    // const [ isSelected, setIsSelected ] = useState(false);
    const cityDataObj = useContext(CityData);
    const selectedCity = cityDataObj.selectedCity;
    const setSelectedCity = cityDataObj.setSelectedCity;

    const cityName = props.cityName;
    
    function handleOnClick() {
        // isSelected = !isSelected;
        // console.log(isSelected);
        setSelectedCity(cityName);
    }

    let className;
    if(cityName === selectedCity) {
        className = 'individualCity selected';
    } else {
        className = 'individualCity';
    }

    return (
        <div className={className}
            onClick={handleOnClick}
        >{cityName}</div>
    )
}

export default IndividualCity;

let name = "hunter";

function makeGreeting() {
    return "hello " + name;
}

const response = makeGreeting();

name = 'Tao'