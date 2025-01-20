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
            <div className='container-fluid' style={{ backgroundColor: 'black' }}>
                <div className='row' style={{ backgroundColor: 'black' }}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='row' style={{ paddingRight: '20px', marginTop: '80px', paddingLeft: '20px', paddingBottom: '80px', lineHeight: '1.6', }}>
                        <div className='col-sm mob-mb-20'
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/">
                                    <img src={LOGO} className='footet-logo-image' alt="Hifive Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className='col-sm mob-mb-40 fs-18' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}>
                                <h3>Find Us</h3><br></br>
                                <h1 className="orangered">{process.env.REACT_APP_CAFE_NAME}</h1>
                                <h3>{process.env.REACT_APP_ADDRESS}</h3>
                                <h3>
                                    <FontAwesomeIcon icon={faPhone} />&nbsp;{process.env.REACT_APP_CALL_NUMBER},
                                    &nbsp;&nbsp;
                                    <WhatsappIcon size={30} round={true} style={{ position: 'relative', top: '0%', left: '0%', color: 'green' }} />&nbsp;{process.env.REACT_APP_WHATSAPP_NUMBER}
                                    <br /> {process.env.REACT_APP_CONTACT_EMAIL}</h3>
                                <h3>{process.env.REACT_APP_OPEN_TIME}</h3>
                                <div>
                                    <WhatsAppLink />
                                    <InstagramLink />
                                    <FacebookLink />
                                </div>
                            </div>
                        </div>
                        <div className='col-sm fs-16 black' style={{
                            justifyContent: 'center', textAlign: 'center',
                            alignItems: 'center', color: '#ffeeda'
                        }}>
                            <div className="pt-5">
                                <h4 className="white">Wedding Event Hall</h4>
                                <h4 className="white">Candle Light Dinner</h4>
                                <h4 className="white">Book Team Lunch</h4>
                                <h4 className="white">Quick Cake Delivery</h4>
                                <h4 className="white">Birthday Cakes</h4>
                            </div>

                            <div className="mt-5">
                                <Link to='/terms_condition'><h4 className="grey">Terms & Condition</h4></Link>
                                <Link to='/privacy_policy'><h4 className="grey">Privacy Policy</h4></Link>
                                <Link to='/refund_policy'><h4 className="grey">Refund Policy</h4></Link>
                                <Link to='/shipping_policy'><h4 className="grey">Shipping Policy</h4></Link>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Contact;
