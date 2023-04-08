import { useState, useEffect } from "react";
import useCountry from "../../hooks/useCountry";

/* Components */
import Nav from "./components/nav/nav";
import FlagCard from "./components/flag_card/flag_card";

/* Plugins */
import Dropdown from 'react-dropdown';


/* CSS */
import 'react-dropdown/style.css';
import "./rest_countries_api.scss";

const FILTER_OPTIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

function RestCountriesApi() {

    const [is_dark_mode, setIsDarkMode] = useState(false);
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
        <div className={`${is_dark_mode && "dark"}`}>
            <Nav onDarkModeClick={() => setIsDarkMode(prevState => !prevState)} />

            <div className="header_container _container">
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
            </div>

            <div className="flags_container _container">
                {countries.map(country =>  <FlagCard country={country} />)}
            </div>
        </div>
    )
}

export default RestCountriesApi