import { useState } from "react";
import axios from "axios";

function useCountry() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});
    const [border_countries, setBorderCountries] = useState([]);

    const getCountries = async () => {
        await axios.get("https://restcountries.com/v3.1/all")
            .then(response => {
                setCountries(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }

    const getCountry = async (code) => {
        await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((response) => {
                let data = response.data[0];

                if(data?.borders?.length){
                    getBorderCountries(data.borders);
                }

                setCountry({
                    name             : data.name.common,
                    flag             : data.flags.png,
                    alt              : data.flags.alt,
                    native_name      : Object.values(data.name.nativeName)[0].common,
                    population       : data.population,
                    region           : data.region,
                    subregion        : data.subregion,
                    capital          : data.capital.join(", "),
                    tld              : data.tld.join(", "),
                    languages        : Object.values(data.languages).join(", "),
                    currencies       : Object.values(data.currencies)[0].name,
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    const getCountriesByRegion = async (region = "") => {
        await axios.get(`https://restcountries.com/v3.1/region/${region}`)
            .then(response => {
                setCountries(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }

    const getCountriesByName = async (name = "") => {
        await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => {
                setCountries(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }

    const getBorderCountries = async (codes = []) => {
        await axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes.join()}`)
            .then(response => {
                let data = response.data;
                let border_countries = [];

                for(let i = 0; i < data.length; i++){
                    border_countries.push({code: data[i].cca2, label: data[i].name.common });
                }
                setBorderCountries(border_countries);
            })
            .catch(err => {
                console.log(err)
            });
    }

    return {
        countries,
        country,
        border_countries,
        getCountries,
        getCountry,
        getCountriesByRegion,
        getCountriesByName,
        getBorderCountries
    };
}

export default useCountry;