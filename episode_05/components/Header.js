import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <img alt='app-logo' src={LOGO_URL} />
            </div>
            <div>
                <ul className='nav-items'>
                    <li className='list-items'>Home</li>
                    <li className='list-items'>About Us</li>
                    <li className='list-items'>Contact Us</li>
                    <li className='list-items'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;