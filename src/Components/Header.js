import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll'
import ProfileImage from '../ProfileImage.jpg'
import Downtown from '../Downtown-Austin.jpg'

function Header() {
    return (
        <div id='header-container'>
            {/* <img id='background' src={Downtown} alt="" /> */}
            <img id='profile-image' src={ProfileImage} alt="" />
            <p>Software Engineer with a true passion for creating exhilarating apps using the most on-demand languages and frameworks</p>
        </div>
    );
}

export default Header;