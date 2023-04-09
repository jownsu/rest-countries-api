import { Link } from "react-router-dom";
import "./nav.scss";

function Nav({onDarkModeClick = () => {}}) {
    return ( 
        <nav>
            <div className="_container">
                <Link to="/"><h1>Where in the world?</h1></Link>
                <button 
                    type="button"
                    onClick={onDarkModeClick}
                >
                    <span></span> Dark Mode
                </button>
            </div>
        </nav>
    )
}

export default Nav;