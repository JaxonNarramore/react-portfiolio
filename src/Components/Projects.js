import React from 'react';
import { Link } from 'react-router-dom';
import AirQual from '../AirQual.png'
import PDR from '../PDR.png'
import SpaceRace from '../SpaceRace.png'
import { Element } from 'react-scroll'

function Projects() {
    return (
        <div>
            <h4 id='projects-heading'>Projects</h4>
            <div id='project-container'>
                <Element id='projects' name='projects'>
                    <a href="https://air-qual.herokuapp.com/" target="_blank">
                        <img className='project-images' src={AirQual} alt="" />
                    </a>
                    <a href="https://pestdamagereport.herokuapp.com/" target="_blank">
                        <img className='project-images' src={PDR} alt="" />
                    </a>
                    <a href="https://jaxonnarramore.github.io/" target="_blank">
                        <img className='project-images' src={SpaceRace} alt="" />
                    </a>
                </Element>
            </div>
        </div>
    );
}

export default Projects;