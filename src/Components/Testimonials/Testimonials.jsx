import React, { useContext } from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import {Pagination} from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'
import {themeContext} from '../../Context'

const Testimonials = () => {

    // theme context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients =[
        {
            img: profilePic1,
            review: 
                "Lorem ipsum dolor, sit, amet, consecutor asipsofj, siprest "
        },
        {
            img: profilePic2,
            review:
                "A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging."
        },
        {
            img: profilePic3,
            review:
                "Front End Web Developer, is responsible for using their knowledge of programming languages to code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web applications."
        },
        {
            img: profilePic4,
            review:
                "A UI developer's role is to translate creative software design concepts and ideas into reality using front end technology. They understand the user interface design solution both in its practical intent and creative vision, and convert it into engineered softwares."
        }
    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients Always get</span>
            <span>Exceptional Work</span>
            <span>From me...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true,color: darkMode?'white': ''}}
            >
                {clients.map((client, index)=>{
                    return(
                        
                            <SwiperSlide key={index}>
                                <div className="testimonials">
                                    <img src={client.img} alt=''/>
                                    <span style={{color: darkMode?'white': ''}}>{client.review}</span>
                                </div>
                                
                                
                            </SwiperSlide>
                        
                    );
                })}
            </Swiper>
    </div>
  )
}

export default Testimonials