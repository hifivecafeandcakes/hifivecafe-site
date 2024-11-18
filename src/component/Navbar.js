import React, { useState } from 'react'
import '../theme/css-component/navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretUp, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../theme/image/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [username, setUsername] = useState(localStorage.getItem('user_name'));
    const [userid, setUserid] = useState(localStorage.getItem('user_id'));

    const logout = async (e) => {
        localStorage.setItem('user_id', "");
        localStorage.setItem('user_email', "");
        localStorage.setItem('user_phoneno', "");
        localStorage.setItem('user_name', "");
        setUserid("")
        setUsername("")
    }

    const handleToggle = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    // =============================================================================

    function upcoming() {
        alert("Upcoming!")
    }






    return (
        <>
            <div className='navbar container-fluid'>
                <div className='logo'>
                    <a href="/"> <img src={LOGO} width={"35px"} /></a>

                </div>
                <ul className='hero'>

                    <li><a href="/">HOME</a></li>
                    <li><a href="/galary">GALLERY</a></li>
                    <li><a href="/reservation">RESERVATION</a></li>
                    <li><a onClick={upcoming} href="#"> CAKE</a></li>
                    <li><a onClick={upcoming} href="#">MENU</a></li>
                    <li><a onClick={upcoming} href="#">CONTACT US</a></li>
                    <li><a onClick={upcoming} href="#"><FontAwesomeIcon icon={faCartShopping} /></a></li>


                </ul>

                {(userid) ?
                    <>
                        <h4 className='green'>Hi, {username}</h4>
                        <Link to="/" className='action_btn' onClick={logout}>Logout</Link>
                    </> :
                    <a href="/login"><button className='action_btn'> Login</button></a>}



                <div className="toggle_btn" onClick={handleToggle}  >


                    {isDropdownOpen ? <div style={{ display: 'flex', justifyContent: 'space-between ', width: '100%' }}><a href="/menu_cart" style={{ marginRight: '90%' }}><FontAwesomeIcon icon={faCartShopping} /></a> <FontAwesomeIcon icon={faTimes} color='orange' /></div>
                        : <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}><a href="" style={{ marginRight: '90%', marginTop: '-12%' }}><FontAwesomeIcon icon={faCartShopping} /></a>  <FontAwesomeIcon icon={faBars} color='orange' /> </div>}



                </div>



            </div>


            <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
                <li><a href="/">HOME</a></li>
                <li><a href="/galary">GALLERY</a></li>
                <li><a href="/reservation">RESERVATION</a></li>
                <li><a onClick={upcoming} href="#"> CAKE</a></li>
                <li><a onClick={upcoming} href="#">MENU</a></li>

                <li><a onClick={upcoming} href="#">CONTACT US</a></li>
                <li ><a href="/login" className='button' > Login</a></li>

            </div>

        </>
    )
}

export default Navbar
