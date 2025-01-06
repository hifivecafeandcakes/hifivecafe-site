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
import WhatsAppLink from "./social/WhatsAppLink";
import InstagramLink from "./social/InstagramLink";
import FacebookLink from "./social/FacebookLink";

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
                                <h1>{process.env.REACT_APP_CAFE_NAME}</h1>
                                <h1>{process.env.REACT_APP_ADDRESS}</h1>
                                <h1>
                                    <FontAwesomeIcon icon={faPhone} />&nbsp;{process.env.REACT_APP_CALL_NUMBER},
                                    &nbsp;&nbsp;
                                    <WhatsappIcon size={30} round={true} style={{ position: 'relative', top: '0%', left: '0%', color: 'green' }} />&nbsp;{process.env.REACT_APP_WHATSAPP_NUMBER}
                                    <br /> {process.env.REACT_APP_CONTACT_EMAIL}</h1>
                                <h1>{process.env.REACT_APP_OPEN_TIME}</h1>
                                <div>
                                    <WhatsAppLink />
                                    <InstagramLink />
                                    <FacebookLink />
                                </div>
                            </div>
                        </div>
                        <div className='col-sm home_col3_1 ' style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', backgroundColor: '#ffeeda'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <h1>Wedding Event Hall</h1>
                                <h1>Candle Light Dinner</h1>
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
