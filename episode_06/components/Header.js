import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName, setBtnName] = useState('login')
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
                    <button className='list-items login'
                    onClick={()=>{
                        btnName === 'login' ? setBtnName('logout') :setBtnName('login')
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;