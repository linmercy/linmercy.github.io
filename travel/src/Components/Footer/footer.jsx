import React from 'react'
import './footer.css'
import video from '../Home/video.mp4'
import { SiFacebook, SiInstacart, SiInstagram, SiTwitter, SiYourtraveldottv } from 'react-icons/si'
import { FiChevronRight, FiSend } from 'react-icons/fi'

const Footer = () => {
    return (
        <section className='footer' >
            <div className="videoDiv">
                <video src={video} loop autoPlay muted typeof='video/mp4'></video>
            </div>

            <div className="secCont container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>Get In Touch</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div className="input flex">
                        <input type="text" placeholder='Enter Email...' />
                        <button className='btn flex' type='submit'>
                            SEND<FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="card flex">
                    <div className="intro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <SiYourtraveldottv className='icon'/>
                                Travel.
                            </a>
                        </div>

                        <div className="paragraph flex">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Fuga, deleniti nulla sint
                            aspernatur aut sapiente qui accusamus sunt 
                            vitae totam illo quis saepe dicta, animi at est 
                            dignissimos odio harum!
                        </div>

                        <div className="socials">
                            <SiTwitter className='icon'/>
                            <SiFacebook className='icon'/>
                            <SiInstagram className='icon'/>
                        </div>
                    </div>

                    <div className="links grid">
                        <div className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>

                            <li className="list flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer