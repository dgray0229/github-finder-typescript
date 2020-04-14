import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import PropTypes from 'prop-types'

// We define the type of our props in a separate object
type NavbarProps = {
    title: string,
    // The question mark means that the icon property is optional
    icon?: any,
}

// We then pass that type to our navbar component
const Navbar = ( {title}: NavbarProps) => {
    // Beacuse this is a funcitonal component, we no longer define default props inside of the component

    return (
        <header>
            <nav className="navbar bg-primary">
                <h1><FontAwesomeIcon icon={faGithub} /> {title!}</h1>
            </nav>
        </header>
    )

}
// Here is where we define default props for the navbar
Navbar.defaultProps = {
    // We assert that this property is non-null below with our '!' non-null assertion operator
    title: "Github Finder"
};


export default Navbar
