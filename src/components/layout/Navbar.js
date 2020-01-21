import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    {/* If you do it with Html tag link, State will be lost on the way.
                        That's why we use <Link> Tag above */}
                    <a href='/About' >About</a>
                </li>
            </ul>


        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
