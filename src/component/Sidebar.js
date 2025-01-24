import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../theme/css-component/sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretUp, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { WhatsappIcon } from "react-share";
import LOGO from '../theme/image/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InstagramLink from './social/InstagramLink';
import FacebookLink from './social/FacebookLink';
import WhatsAppLink from './social/WhatsAppLink';


const Sidebar = ({ openSidebar = 'hide' }) => {

    const isMaintenance = process.env.REACT_APP_MAINTENANCE_MODE === "true" || false;


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

    useEffect(() => {
        AOS.init({ duration: 1000 });
    })

    console.log(openSidebar);


    const [device, setDevice] = useState("desktop");


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



    function upcoming() {
        alert("Upcoming!")
    }
    return (
        <>
            <div className={device == "mobile" ? ` container-fluid sidebar-body ${openSidebar}` : 'container-fluid sidebar-body'}>
                <div className='row'>
                    <div className={device == "mobile" ? `col-lg-3 mob-sidebar-content ${openSidebar}` : 'col-lg-3 web-sidebar-content'}>
                        <div className={device == "mobile" ? `sidebar_one mob-mt-20 ${openSidebar}` : 'sidebar_one'}>
                            <Link to="/">
                                <img src={LOGO} className='logo-image' alt="Hifive Logo" />
                            </Link>
                        </div>
                        <div className={device == "mobile" ? `sidebar_two mob-mt-40 ${openSidebar}` : 'sidebar_two show'}>
                            {(isMaintenance) ?
                                <>
                                    <br></br><br></br><br></br>
                                    <h3 className='text-center'>
                                        We Are Coming Soon!
                                    </h3><br></br><br></br>
                                    <h4>
                                        Our webiste is opening soon.<br></br>
                                    </h4><br></br><br></br><br></br>
                                    <Link className='text-center' to="/contact"><h2 className='text-center blue'>CONTACT US</h2></Link>
                                </> : ""
                            }
                            <ul >
                                {(isMaintenance) ? "" :
                                    <>
                                        <div data-aos='fade-left'><Link to="/">HOME</Link></div>
                                        <div data-aos='fade-left'><Link to="/galary">GALLERY</Link></div>
                                        <div data-aos='fade-left'><Link to="/reservation">RESERVATION</Link></div>
                                        <div data-aos='fade-left'><Link to="/cake">CAKE</Link></div>
                                        <div data-aos='fade-left'><Link to="/menu">MENU</Link></div>
                                        <div data-aos='fade-left'><Link to="/contact">CONTACT US</Link></div>


                                        <div data-aos='fade-left' style={{ display: 'flex', justifyContent: 'space-between' }}>

                                            <Link to="/order" href="#"><FontAwesomeIcon icon={faCartShopping} /></Link>
                                            {(userid) ?
                                                <>
                                                    <h5 className='green'>Hi, {username}</h5> <Link to="/" onClick={logout}>Logout</Link>
                                                </> :
                                                <Link to="/login">LOGIN</Link>
                                            }
                                        </div>
                                    </>

                                }
                            </ul>
                        </div>
                        <div className={device == "mobile" ? `mob-sidebar_three mob-mt-20 mob-ms-20 ${openSidebar}` : 'sidebar_three'}>
                            {/* <a
                                href="https://api.whatsapp.com/send?phone=919585135049" // Make sure the phone number is in the correct format
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}

                            >
                                <WhatsappIcon
                                    size={60}
                                    round={true}
                                    style={{ position: 'relative', top: '18%', left: '2%', color: 'green' }}
                                />
                            </a> */}
                            <WhatsAppLink />
                            <InstagramLink />
                            <FacebookLink />

                            {/* <IconButton style={{ color: 'white' }}>
                                <XIcon />
                            </IconButton> */}

                        </div>

                    </div>
                </div>
            </div >


        </>
    )
}

export default Sidebar
