import "./nav.scss";

function Nav({onDarkModeClick = () => {}}) {
    return ( 
        <nav>
            <div className="_container">
                <h3>Where in the world?</h3>
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