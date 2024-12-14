import React, { useState } from 'react'
import '../theme/css-component/navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faCaretUp, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../theme/image/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.js';



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
        setDropdownOpen(!isDropdownOpen);
        console.log(isDropdownOpen);
    };

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // -1 tells the browser to go back one step
    };


    // =============================================================================

    function upcoming() {
        alert("Upcoming!")
    }



    return (
        <>
            <div className='navbar container-fluid' style={{ justifyContent: 'space-between', marginLeft: "0px", paddingRight: "40px" }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '10%' }}>
                    <div className='ps-2'>
                        <FontAwesomeIcon onClick={handleGoBack}
                            icon={faArrowLeft} className='white' />
                    </div>
                    <div className='logo ms-2'>
                        <Link to="/"> <img src={LOGO} width={"35px"} /></Link>
                    </div>
                </div>

                {/* <div className="text-center"  style={{ display: 'flex', justifyContent: 'space-between', width: '30%' }}> */}

                <ul className='hero'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/galary">GALLERY</Link></li>
                    <li><Link to="/reservation">RESERVATION</Link></li>
                    <li><Link onClick={upcoming} href="#"> CAKE</Link></li>
                    <li><Link onClick={upcoming} href="#">MENU</Link></li>
                    <li><Link onClick={upcoming} href="#">CONTACT US</Link></li>
                    <li><Link to="/order" href="#"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                </ul>

                {(userid) ?
                    <>
                        <h4 className='green'>Hi, {username}</h4>
                    </> :
                    <Link href="/login"><button className='action_btn'> Login</button></Link>}

                {/* </div> */}
                <div className="toggle_btn" >
                    <Link to="/order" href="#"><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='ps-4 pt-2'>
                        <button onClick={() => handleToggle()} >
                            <FontAwesomeIcon icon={isDropdownOpen ? faTimes : faBars} color='orange' />
                        </button>
                    </div>

                </div>
            </div>

            <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
                <Sidebar openSidebar={`${isDropdownOpen ? 'show' : 'hide'}`} />
            </div>
        </>
    )
}

export default Navbar
