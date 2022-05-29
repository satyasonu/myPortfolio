import React, {useContext} from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context'


const Works = () => {

    // theme context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
 
    return (
    <div className="works">
        <div className="awesome">
            <span style={{color: darkMode? 'white':''}}>Works For All These</span>
            <span>Brands & Clients</span>
            <span style={{color: darkMode? 'white':''}}>Dummy text printing, Demo text printing Dummy text printing Dummy text printing
                <br/>
                Dummy text printing
                <br/>
                Dummy text printing, Demo text printing Dummy text printing Dummy text printing
                <br/>
                Dummy text printing, Demo text printing Dummy text printing Dummy text printing
            </span>
            <button className='button s-button'>Hire Me</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* Right side || img from blob.com*/}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
            </div>
            {/* background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works