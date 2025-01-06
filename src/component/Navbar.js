import React, { useState, useEffect } from 'react'
import '../theme/css-component/navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faCaretUp, faCartShopping, faTimes, faPowerOff, faUserCircle, faSignIn }
    from '@fortawesome/free-solid-svg-icons';
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


    const navigate = useNavigate();

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
        navigate('/');
    }

    const handleToggle = () => {
        setDropdownOpen(!isDropdownOpen);
        console.log(isDropdownOpen);
    };

    let dev = (localStorage.getItem("device") == null || localStorage.getItem("device") == "") ? "desktop" : localStorage.getItem("device");
    const [device, setDevice] = useState(dev);


    const handleResize = () => {
        if (window.innerWidth < 768) {
            setDevice("mobile");
            localStorage.setItem("device", "mobile")
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setDevice("tablet");
            localStorage.setItem("device", "tablet")
        } else {
            setDevice("desktop");
            localStorage.setItem("device", "desktop")
        }
    };

    useEffect(() => {
        // Call once on mount to set the initial device type
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

                <div className='navbar container-fluid '>
                    <>
                        <div className='d-flex w-40 justify-content-around text-center'>
                            <div className='pt-3'>
                                <FontAwesomeIcon onClick={handleGoBack} icon={faArrowLeft} className='fs-20 red' />
                            </div>

                            <div>
                                <Link to="/order" href="#"><FontAwesomeIcon icon={faCartShopping} className='fs-20  pt-3 orange' /></Link>
                            </div>

                        </div>

                        <div className='w-20 text-center'>
                            <Link to="/"> <img className='logoCenterImg' src={LOGO2} /></Link>
                        </div>

                        <div className="d-flex w-40 justify-content-evenly text-center ">

                            {(userid) ?
                                <>
                                    <div className='text-center pt-1'>
                                        <FontAwesomeIcon icon={faUserCircle} className='fs-18 aqua' />
                                        <h4 className=' mob-font-14 pt-0 white'>
                                            {username.length > 8 ? username.substring(0, 8) + '...' : username}</h4>
                                    </div>
                                </>
                                :

                                <>
                                    <div className='text-center pt-1'>
                                        <Link to="/login"> <FontAwesomeIcon icon={faSignIn} className='fs-18 aqua' />
                                            <h4 className=' mob-font-14 pt-0 white'>Login</h4></Link>
                                    </div>
                                </>
                            }

                            <div className="pt-3 darkred">
                                <FontAwesomeIcon onClick={() => handleToggle()} className='fs-20'
                                    icon={isDropdownOpen ? faTimes : faBars} color='' />
                            </div>

                        </div>
                    </>

                    {/* <div><Link to="/" onClick={logout}><FontAwesomeIcon icon={faPowerOff} /></Link></div> */}
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
                            <li><Link to="/cake">CAKE</Link></li>
                            <li><Link to="/menu">MENU</Link></li>
                            <li><Link to="/contact">CONTACT US</Link></li>
                            <li><Link to="/order" href="#"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                            {(userid) ?
                                <li>
                                    <h4 className='green mob-font-14 pt-0'>
                                        Hi&nbsp;{(username) && (username.length > 8) ? username.substring(0, 8) + '...' : username}
                                    </h4>
                                </li> :
                                <li>
                                    <Link to="/login" className='green mob-font-14 pt-0'>
                                        Login
                                    </Link>
                                </li>
                            }
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
