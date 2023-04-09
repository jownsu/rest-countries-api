import { useState, useEffect } from "react";
import useCountry from "../../hooks/useCountry";

/* Components */
import FlagCard from "./components/flag_card/flag_card";

/* Plugins */
import Dropdown from 'react-dropdown';


/* CSS */
import 'react-dropdown/style.css';
import "./rest_countries_api.scss";

const FILTER_OPTIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

function RestCountriesApi() {

    const { getCountries, getCountriesByRegion, getCountriesByName, countries } = useCountry();

    useEffect(() => {
        getCountries();
    }, [])

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            if(event.target.value){
                getCountriesByName(event.target.value);
            }
            else{
                getCountries();
            }
        }
    };

    return (
        <>
            <header className="header_container _container">
                <div className="input_group">
                    <span></span>
                    <input 
                        type="text" 
                        placeholder="Search for a country..." 
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <Dropdown 
                    className="filter_dropdown"
                    options={FILTER_OPTIONS} 
                    onChange={({value}) => getCountriesByRegion(value)} 
                    placeholder="Filter by Region" 
                    arrowClosed={<span className="arrow-closed" />}
                    arrowOpen={<span className="arrow-open" />}
                />
            </header>
            <main className="flags_container _container">
                {countries.map((country, index) =>  <FlagCard key={index} country={country} />)}
            </main>
        </>
    )
}

export default RestCountriesApi