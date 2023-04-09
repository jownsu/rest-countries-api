import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestCountriesApi from "./views/rest-countries-api/rest_countries_api"
import Country from "./views/country/country";
import Nav from "./views/rest-countries-api/components/nav/nav";
import "./assets/sass/index.scss";

function App() {
    const [is_dark_mode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = is_dark_mode ? "dark" : "";
    }, [is_dark_mode]);
    
    return (
        <div>
            <Router>
                <Nav onDarkModeClick={() => setIsDarkMode(prevState => !prevState)} />
                <Routes>
                    <Route exact path="/" element={<RestCountriesApi />} />
                    <Route exact path="/country/:country_id" element={<Country />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
