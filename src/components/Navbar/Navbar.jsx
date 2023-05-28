import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__head'>
            <h2>SUSHIMAN</h2>
            <div className='navbar__overlay'></div>
        </div>
        <ul className='navbar__list'>
            <li>MENU</li>
            <li>FOOD</li>
            <li>SERVICES</li>
            <li>ABOUT US</li>
        </ul>
    </nav>
  )
}

export default Navbar