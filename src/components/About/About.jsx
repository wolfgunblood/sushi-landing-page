import React from 'react';
import "./About.scss";
import Sushi1 from "../../assets/sushi-3.png";
import Sushi2 from "../../assets/sushi-2.png";

const About = () => {
    return (
        <section className='about-container'>
            <div className='about__image'>
                <div className='about__image1'>
                    <img src={Sushi1} alt="Sushi-one" />
                </div>
                <button>
                    Learn More
                </button>
                <div className='about__image2'>
                    <img src={Sushi2} alt="Sushi-two" />
                </div>
            </div>
            <div className='about__text'>
                <p className="sushi__subtitle">About Us / 私たちに関しては</p>
                <h3 className="sushi__title">Our mission is to bring true Japanese flavours to you.</h3>
                <p className='sushi__text'>We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
            </div>
        </section>
    )
}

export default About