import { useEffect } from "react";
import useCountry from "../../hooks/useCountry";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


import "./country.scss";
function Country() {

    const { country_id } = useParams();
    const { country, border_countries, getCountry } = useCountry();

    useEffect(() => {
        getCountry(country_id);
    }, [country_id]);

    return (

        <div className="country _container">
            <Link to="/"><span></span>Back</Link>
            <div className="country_main">
                <img src={country?.flag} alt={country?.alt} />
                <div>
                    <p className="country_name">{country?.name}</p>
                    <div className="country_info">
                        <div>
                            <p>Native Name: <span>{country?.native_name}</span></p>
                            <p>Population: <span>{country?.population}</span></p>
                            <p>Region: <span>{country?.region}</span></p>
                            <p>Sub Region: <span>{country?.subregion}</span></p>
                            <p>Capital: <span>{country?.capital}</span></p>
                        </div>
                        <div>
                            <p>Top Level Domain: <span>{country?.tld}</span></p>
                            <p>Currencies: <span>{country?.currencies}</span></p>
                            <p>Languages: <span>{country?.languages}</span></p>
                        </div>
                    </div>
                    <div className="country_borders">
                        <p>Border Countries:</p> 
                        <div>
                            {border_countries.map(country => (
                                <Link to={`/country/${country.code}`}>{country.label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country;