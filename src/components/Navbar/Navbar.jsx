import './Navbar.scss';
import { AiOutlineSearch } from  "react-icons/ai";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__head'>
            <h2>SUSHISHOP</h2>
            <div className='navbar__overlay'></div>
        </div>
        <ul className='navbar__list'>
            <li>MENU</li>
            <li>FOOD</li>
            <li>SERVICES</li>
            <li>ABOUT US</li>
            <li>
              <AiOutlineSearch className='navbar__search' size={25} color='#121212'/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar