import React, { useContext } from 'react'
import './Services.css'
import { Card } from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glassesimoji.png';
import Humble from '../../img/humble.png'
import Resume from './My_resume.pdf'
import { themeContext } from '../../Context'

export const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services">
        {/* Left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome Services</span>
            <span>services</span>
            <span>Dummy text printing, Demo text printing
                <br/>
                Dummy text printing
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"Figma,Sketch, photoshop, Adobe, Adobe xd"}
                />
            </div>
            {/* 2nd Card */}
            <div style={{top: '12rem',left: '-4rem'}}>
                <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"Html,CSS, JavaScript, React, Angular JS"}
                />
            </div>
            {/* 3rd Card */}
            <div style={{top: '19rem',left: '12rem'}}>
                <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={"Lorem, ispum dummy text are usually use in section where"}
                />
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}> </div>
        </div>
    </div>
  )
}
