import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../Floatingdev/FloatingDiv.jsx'
import Crown from '../../img/crown.png'
import { themeContext } from "../../Context";




export const Intro = () => {

    // context for theme
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hy, I am </span>
                <span>Satyabrata</span>
                <span>front-end developer with medium level of experience in web designing and development, producting the Quality work</span>
                
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>

            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2= 'Developer'/>
            </div>
            <div style={{top:'18.3rem', left:'1.3rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' text2 = 'award'/>
            </div>
            {/* blur divs */}
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}
