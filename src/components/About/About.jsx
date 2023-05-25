import React from 'react'
import Sushi1 from "../../assets/sushi-3.png";
import Sushi2 from "../../assets/sushi-2.png";

const About = () => {
  return (
    <div className='about-container'>
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
            <h2>About Us</h2>
        </div>
    </div>
  )
}

export default About