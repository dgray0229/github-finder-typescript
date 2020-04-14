import React, { Component } from 'react'
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
export class Navbar extends Component<NavbarProps> {
    // The 'static' keyword defines a static method for a class. 
    // Static methods aren't called on instances of the class.
    // Instead, they're called on the class itself.
    // These are often utility functions, such as functions to create or clone objects

    /* 
    The proptype way of doing things
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    */
    static defaultProps = {
        // We assert that this property is non-null below with our '!' non-null assertion operator
        title: "Github Finder"
    };

    render() {
        return (
            <header>
                <nav className="navbar bg-primary">
                    <h1><FontAwesomeIcon icon={faGithub} /> {this.props.title!}</h1>
                </nav>
            </header>
        )
    }
}

export default Navbar
