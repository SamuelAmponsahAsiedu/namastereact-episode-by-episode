import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState('login');
    const onlineStatus = useOnlineStatus();

    return(
        <div className='header'>
            <div className='logo'>
                <img alt='app-logo' src={LOGO_URL} />
            </div>
            <div>
                <ul className='nav-items'>
                    <li className='list-items'>
                        OnlineStatus: {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li className='list-items'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='list-items'>
                       <Link to='/about'> About Us</Link>
                    </li>
                    <li className='list-items'>
                       <Link to='/contact'>Contact Us</Link> 
                    </li>
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

