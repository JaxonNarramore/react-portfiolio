import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
function Nav() {
    return (
        <nav id='nav-container'>
            <Link
                to="top" 
                spy={true} 
                smooth={true} 
                duration={500}
                id='jaxon'
            >
                Jaxon Narramore
            </Link>
            <Link
                to="projects" 
                spy={true} 
                smooth={true} 
                duration={500}
                className='nav'
            >
                Projects
            </Link>
            <Link
                to="about" 
                spy={true} 
                smooth={true} 
                duration={500}
                className='nav'
            >
                About Me
            </Link>
            <Link
                to="skills" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='nav'
            >
                Skills
            </Link>
            <Link
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='nav'
            >
                Contact
            </Link>
        </nav>
    );
}

export default Nav;