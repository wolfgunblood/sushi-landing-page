import "./Footer.scss"
import Twitter from "../../assets/twitter.svg"
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="footer-logo">
                <span>SUSHI</span>MAN
            </div>
            <ul className='footer-menu'>
                <li>MENU</li>
                <li>FOOD</li>
                <li>SERVICES</li>
                <li>ABOUT US</li>
            </ul>
            <ul className='footer-social-media'>
                <li>
                    <img src={Twitter} alt="Twiiter" />
                </li>
                <li>
                    <img src={Facebook} alt="Facebook" />
                </li>
                <li>
                    <img src={Instagram} alt="Instagram" />
                </li>

            </ul>
        </footer>
    )
}

export default Footer