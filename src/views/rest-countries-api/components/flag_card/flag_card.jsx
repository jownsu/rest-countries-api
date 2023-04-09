import { Link } from "react-router-dom";
import "./flag_card.scss";


function FlagCard({country}) {



    return (
        <Link to={`country/${country.cca2}`} className="flag_card">
            <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
            <div>
                <p className="country_name">{country.name.common}</p>
                <p>
                    Population:
                    <span> {country.population}</span>
                </p>
                <p>
                    Region:
                    <span> {country.region}</span>
                </p>
                <p>
                    Capital:
                    <span> {country.capital}</span>
                </p>
            </div>
        </Link>
    )
}

export default FlagCard;