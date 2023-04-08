import { useState } from "react";
import axios from "axios";

function useCountry() {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        await axios.get("https://restcountries.com/v3.1/all")
            .then(response => {
                setCountries(response.data);
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
                setCountries(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }

    return {
        countries,
        getCountries,
        getCountriesByRegion,
        getCountriesByName,
        getBorderCountries
    };
}

export default useCountry;