import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestCountriesApi from "./views/rest-countries-api/rest_countries_api"
import Country from "./views/country/country";
import "./assets/sass/index.scss";

function App() {


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<RestCountriesApi />} />
                <Route exact path="/country" element={<Country />} />
            </Routes>
        </Router>
    );


    return <RestCountriesApi />
}

export default App;
