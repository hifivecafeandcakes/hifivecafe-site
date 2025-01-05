import React, { useState } from 'react'
import '../theme/css-component/navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faCaretUp, faCartShopping, faTimes, faPowerOff, faUserCircle, faSignIn } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../theme/image/logo.png'
import LOGO1 from '../theme/image/logo1.jpg'
import LOGO2 from '../theme/image/logo2.jpg'
import LOGO3 from '../theme/image/logo3.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.js';



const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [username, setUsername] = useState(localStorage.getItem('user_name'));
    const [userid, setUserid] = useState(localStorage.getItem('user_id'));


    const device = localStorage.getItem("device");

    const logout = async (e) => {
        localStorage.setItem('user_id', "");
        localStorage.setItem('user_email', "");
        localStorage.setItem('user_phoneno', "");
        localStorage.setItem('user_name', "");
        localStorage.setItem("res_id", "");
        localStorage.setItem("res_cat_id", "");
        localStorage.setItem("res_scat_id", "");
        localStorage.setItem("res_code", "")
        setUserid("")
        setUsername("")
        window.location.reload();
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
            {/* <div className='navbar container-fluid' style={{ justifyContent: 'space-between', marginLeft: "0px", paddingRight: "40px" }}> */}
            {(device == "mobile") ?

                <div className='navbar container-fluid'>

                    <>
                        <div className='w-20 text-center'>
                            <Link to="/"> <img className='logoCenterImg' src={LOGO2} /></Link>
                        </div>

                        <div className='d-flex w-40 justify-content-around text-center'>
                            <div className='pt-3'>
                                <FontAwesomeIcon onClick={handleGoBack} icon={faArrowLeft} className='white fs-20' />
                            </div>
                            {(userid) ?
                                <>
                                    <div className='text-center pt-1'>
                                        <FontAwesomeIcon icon={faUserCircle} className='fs-18 white' />
                                        <h4 className='white mob-font-14 pt-0'>
                                            {username.length > 8 ? username.substring(0, 8) + '...' : username}</h4>
                                    </div>
                                </>
                                :
                                <Link to="/login" className='fs-20 pt-1'><FontAwesomeIcon icon={faSignIn} /></Link>
                            }

                            {/* <div>
                    <Link to="/" onClick={logout}><FontAwesomeIcon icon={faPowerOff} /></Link>
                </div> */}
                        </div>



                        <div className="d-flex w-40 justify-content-evenly text-center white">



                            <div>
                                <Link to="/order" href="#"><FontAwesomeIcon icon={faCartShopping} className='fs-20  pt-3' /></Link>
                            </div>

                            <div className="pt-3">
                                {/* <button > */}
                                <FontAwesomeIcon onClick={() => handleToggle()}
                                    icon={isDropdownOpen ? faTimes : faBars} color='white' />
                                {/* </button> */}
                            </div>

                        </div>
                    </>

                </div > :
                <div className='navbar navbar-web container-fluid'>

                    <div className='w-20 text-center'>
                        <Link to="/"> <img className='logoCenterImg' src={LOGO2} /></Link>
                    </div>

                    <div>
                        <ul className='hero'>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/galary">GALLERY</Link></li>
                            <li><Link to="/reservation">RESERVATION</Link></li>
                            <li><Link onClick={upcoming} href="#"> CAKE</Link></li>
                            <li><Link onClick={upcoming} href="#">MENU</Link></li>
                            <li><Link to="/contact">CONTACT US</Link></li>
                            <li><Link to="/order" href="#"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                            <li><h4 className='green mob-font-14 pt-0'>
                                Hi&nbsp;{username.length > 8 ? username.substring(0, 8) + '...' : username}</h4></li>
                            <li><Link to="/" className='grey' onClick={logout}><FontAwesomeIcon icon={faPowerOff} /></Link></li>
                        </ul>
                    </div>
                </div>
            }

            <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
                <Sidebar openSidebar={`${isDropdownOpen ? 'show' : 'hide'}`} />
            </div>
        </>
    )
}

export default Navbar
