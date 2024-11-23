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
                <Link to="/"> <img src={LOGO} width={"35px"} /></Link>

                </div>
                <ul className='hero'>

                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/galary">GALLERY</Link></li>
                    <li><Link to="/reservation">RESERVATION</Link></li>
                    <li><Link onClick={upcoming} href="#"> CAKE</Link></li>
                    <li><Link onClick={upcoming} href="#">MENU</Link></li>
                    <li><Link onClick={upcoming} href="#">CONTACT US</Link></li>
                    <li><Link onClick={upcoming} href="#"><FontAwesomeIcon icon={faCartShopping} /></Link></li>


                </ul>

                {(userid) ?
                    <>
                        <h4 className='green'>Hi, {username}</h4>
                        <Link to="/" className='action_btn' onClick={logout}>Logout</Link>
                    </> :
                    <Link href="/login"><button className='action_btn'> Login</button></Link>}



                <div className="toggle_btn" onClick={handleToggle}  >


                    {isDropdownOpen ? <div style={{ display: 'flex', justifyContent: 'space-between ', width: '100%' }}><Link href="/menu_cart" style={{ marginRight: '90%' }}><FontAwesomeIcon icon={faCartShopping} /></Link> <FontAwesomeIcon icon={faTimes} color='orange' /></div>
                        : <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}><Link href="" style={{ marginRight: '90%', marginTop: '-12%' }}><FontAwesomeIcon icon={faCartShopping} /></Link>  <FontAwesomeIcon icon={faBars} color='orange' /> </div>}



                </div>



            </div>


            <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/galary">GALLERY</Link></li>
                <li><Link to="/reservation">RESERVATION</Link></li>
                <li><Link onClick={upcoming} href="#"> CAKE</Link></li>
                <li><Link onClick={upcoming} href="#">MENU</Link></li>

                <li><Link onClick={upcoming} href="#">CONTACT US</Link></li>
                <li ><Link href="/login" className='button' > Login</Link></li>

            </div>

        </>
    )
}

export default Navbar
