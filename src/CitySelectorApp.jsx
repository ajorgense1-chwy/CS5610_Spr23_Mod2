import React from 'react';
import IndividualCity from './IndividualCity';

function CitySelectoryApp() {

    const cities = ['Tokyo', 'Paris', 'Seattle', 'Vancouver', 'Brussels', 'New York']

    const cityComponents = [];
    for(let i = 0; i < cities.length; i++) {
        cityComponents.push((<IndividualCity cityName={cities[i]}></IndividualCity>));
    }

    return (<div>{cityComponents}</div>)

}

export default CitySelectoryApp;