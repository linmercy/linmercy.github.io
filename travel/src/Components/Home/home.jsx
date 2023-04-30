import React from 'react'
import './home.css'
import video from './video.mp4'
import { GoLocation } from 'react-icons/go'
import { FaFilter } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { BiListUl } from 'react-icons/bi'
import { IoMdAppstore } from 'react-icons/io'



const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video  src={video} muted autoPlay loop type="video/mp4" ></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span className="smallText">
                        Our Packages
                    </span>

                    <h1 className="homeTitle">
                        Search Your Holiday
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...'/>
                            <GoLocation className="icon"/>
                        </div>
                    </div>
                

                    <div className="dateInput">
                        <label htmlFor="date">Select date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className='total'>$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <FaFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <FiInstagram className="icon"/>
                        <FiTwitter className="icon"/>
                       
                    </div>

                    <div className="leftIcons">
                        <BiListUl className="icon"/>
                        <IoMdAppstore className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home