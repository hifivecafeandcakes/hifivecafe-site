import Navbar from "./Navbar";
import Footer from "./reservation/Footer"
import Sidebar from "./Sidebar";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import LOGO from '../theme/image/logo.png'
import { Link } from 'react-router-dom';
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <>
            <div className='container-fluid' style={{ backgroundColor: 'rgb(255, 238, 218)' }}>
                <div className='row' style={{ backgroundColor: 'rgb(255, 238, 218)' }}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='row home_col3_3'>
                        <div className='col-sm mob-mb-20'
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/">
                                    <img src={LOGO} className='footet-logo-image' alt="Hifive Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className='col-sm mob-mb-40 home_col1_3 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>
                            <div style={{ textAlign: 'center' }}>
                                <p>Find Us</p>
                                <h1 >Hifive Cafe and Cakes, 3, Sathy Rd,
                                    Ramanandha Nagar, Saravanampatti, Coimbatore</h1>
                                <h1>
                                    <FontAwesomeIcon icon={faPhone} />&nbsp;99408 88633,
                                    &nbsp;&nbsp;
                                    <WhatsappIcon
                                        size={30}
                                        round={true}
                                        style={{ position: 'relative', top: '0%', left: '0%', color: 'green' }}
                                    />&nbsp;9500400992
                                    <br /> contact@hifivecafe.com</h1>
                                <h1>Open: 11:00 am – 10:00 pm</h1>
                                <div>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=919500400992" // Make sure the phone number is in the correct format
                                        target="_blank"
                                        rel="noopener noreferrer"

                                    >
                                        <WhatsappIcon
                                            size={40}
                                            round={true}
                                            style={{ position: 'relative', top: '0%', left: '5%', color: 'green' }}
                                        />
                                    </a>

                                    <IconButton style={{ color: 'orange' }}>
                                        <InstagramIcon />
                                    </IconButton>

                                    <IconButton style={{ color: 'orange' }}>
                                        <FacebookIcon />
                                    </IconButton><IconButton style={{ color: 'orange' }}>
                                        <XIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm home_col3_1 ' style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', backgroundColor: '#ffeeda'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <h1 >Wedding Event Hall</h1>
                                <h1 >Candle Light Dinner</h1>
                                <h1>Book Team Lunch</h1>
                                <h1>Quick Cake Delivery</h1>
                                <h1>Birthday Cakes</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
