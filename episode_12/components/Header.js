import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState('login');
    const onlineStatus = useOnlineStatus();

    const {loggedInUser } = useContext(UserContext);

    //subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)
   

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-pink-200 lg:bg-pink-300 ">
            <div className='logo'>
                <img className="flex" alt='app-logo' src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 '>
                    <li className="px-4">
                        OnlineStatus: {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li className="px-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="px-4">
                       <Link to='/about'> About Us</Link>
                    </li>
                    <li className="px-4">
                       <Link to='/contact'>Contact Us</Link> 
                    </li>
                    <li className="px-4">
                       <Link to='/cart'> Cart ({cartItems.length} items) </Link>
                    </li>
                    <button className='list-items login'
                    onClick={()=>{
                        btnName === 'login' ? setBtnName('logout') :setBtnName('login')
                    }}>
                        {btnName}
                    </button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;


