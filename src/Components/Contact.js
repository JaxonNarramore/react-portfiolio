import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
 
function Contact() {
    return (
        <div>
            <div id='icon-container'>
                <a href="https://www.linkedin.com/in/jaxonnarramore/" target="_blank">
                    <FaLinkedin className='react-icons' size={30}/>
                </a>
                <a href="https://github.com/JaxonNarramore" target="_blank">
                    <FaGithub className='react-icons' size={30}/>
                </a>
            </div>
            <div>
                <p>512-850-2204</p>
                <p>jaxon_narramore@hotmail.com</p>
            </div>
        </div>
    );
}

export default Contact;