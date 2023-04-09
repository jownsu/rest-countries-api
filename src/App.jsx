import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestCountriesApi from "./views/rest-countries-api/rest_countries_api"
import Country from "./views/country/country";
import Nav from "./views/rest-countries-api/components/nav/nav";
import "./assets/sass/index.scss";

function App() {

    useEffect(() => {
        const dark_mode = localStorage.getItem("dark_mode");
        if(dark_mode === "true"){
            document.body.className = "dark";
        }
    }, []);

    const toggleDarkMode = () => {

        let dark_mode = localStorage.getItem("dark_mode");

        if(dark_mode === "true"){
            document.body.className = "a";
            localStorage.setItem("dark_mode", "false");
        }
        else{
            document.body.className = "dark";
            localStorage.setItem("dark_mode", "true");
        }
    }

    return (
        <Router>
            <Nav onDarkModeClick={toggleDarkMode} />
            <Routes>
                <Route exact path="/" element={<RestCountriesApi />} />
                <Route exact path="/country/:country_id" element={<Country />} />
            </Routes>
        </Router>
    );
}

export default App;
