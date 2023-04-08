import "./flag_card.scss";


function FlagCard({country}) {



    return (
        <div className="flag_card">
            <img src={country.flags.png} alt={country.flags.alt} />
            <div>
                <h4>{country.name.common}</h4>
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
        </div>
    )
}

export default FlagCard;