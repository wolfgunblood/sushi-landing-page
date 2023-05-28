import "./Hero.scss"
import Sushi1 from "../../assets/sushi-1.png";
import circle from "../../assets/play-circle.svg";
import user from "../../assets/user.png";

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-img'>
        <img src={Sushi1} alt="Sushi One" />
        <h2 className="hero-kanji">
          日  <br />
          本  <br />
          食
        </h2>
        <div className='hero__overlay'></div>
      </div>

      <div className='hero-content__container'>
        <div className="hero-info">
          <h1>Feel the taste of Japanese Food</h1>
          <p>Feel the taste of Japanese Food from anywhere in the world</p>
          <div className="hero-button">
            <button className="hero-button__order">Order Now</button>
            <button className="hero-button__play">
              <img src={circle} alt="Play" />
              How to Order
            </button>
          </div>
        </div>

        <div className="hero-testimonial">
          <div className="hero-testimonial__customer">
            <h2>
              35 <span> k+</span>
            </h2>
            <p>Happy Customer</p>
          </div>
          <div className="hero-testimonial__user">
            <img src={user} alt="User" />
            <p>This is the best Japanese food delivery service that ever existed.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero