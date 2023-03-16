import React, {useState, createContext} from 'react';
import CitySelectoryApp from './CitySelectorApp';

export const CityData = createContext();
export function CityContext(props) {

    const [selectedCity, setSelectedCity] = useState('');

    const cityData = {
        selectedCity: selectedCity,
        setSelectedCity: setSelectedCity,
    }

    return (<CityData.Provider value={cityData}>
        <CitySelectoryApp />
    </CityData.Provider>)


}
