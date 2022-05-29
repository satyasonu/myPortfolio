import React, { useContext,useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';


const Contact = () => {

    // context()
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false);
// install yarn add emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_50sijry', 'template_65abo4b', form.current, 'wH8hJN71HuGyLNG_c')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form">
        <div className="c-left">
            <div className="awesome">
                <span style={{color: darkMode?'white':''}}>Contact me</span>
                <span>Get in Touch with me</span>
                <div className="s-blur1" style={{background: "ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder='Name' />
                <input type="text" name="email" className="user" placeholder='Email' />
                <textarea name='message' className='user' placeholder='Messsage'/>
                <input type="submit" value='Send' className="button" />
                <span>{done && 'Thanks for contacting me!'}</span>
                <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div>
            </form>
        </div>
    </div>
    
  )
}

export default Contact