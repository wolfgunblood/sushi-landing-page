import "./Hero.scss"
import Sushi1 from  "../../assets/sushi-1.png";


const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-img'>
            <img src={Sushi1} alt="Sushi One" />
            <div className='hero__overlay'></div>
        </div>
        <div className='hero-text'>
            
        </div>
    </section>
  )
}

export default Hero