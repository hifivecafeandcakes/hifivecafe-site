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
                    <div className='row web-mt-150 mob-mt-80' style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '60px', lineHeight: '1.6', }}>
                        <div className='col-sm mob-mb-20 '
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/">
                                    <img src={LOGO} className='footet-logo-image' alt="Hifive Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className='col-sm mob-mt-40 mob-mb-80 fs-18' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ fontFamily: "'Dancing Script', cursive" }}>Find Us</h2><br></br>
                                <h1 className="orangered" style={{ fontWeight: 900 }}>{process.env.REACT_APP_CAFE_NAME}</h1>
                                <h4>{process.env.REACT_APP_ADDRESS}</h4>
                                <h3>
                                    <FontAwesomeIcon icon={faPhone} />&nbsp;<span className="blue">{process.env.REACT_APP_CALL_NUMBER}</span>,
                                    &nbsp;&nbsp;
                                    <WhatsappIcon size={30} round={true} style={{ position: 'relative', top: '0%', left: '0%', color: 'green' }} />&nbsp;<span className="green">{process.env.REACT_APP_WHATSAPP_NUMBER}</span>
                                    <br /> <span className="grey fs-20">{process.env.REACT_APP_CONTACT_EMAIL}</span></h3>
                                <h3 className="fs-20">{process.env.REACT_APP_OPEN_TIME}</h3>
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
                                <h2 style={{ fontFamily: "'Dancing Script', cursive" }}>Other Events</h2><br></br>
                                <h4 className="white">Wedding Event Hall</h4>
                                <h4 className="white">Candle Light Dinner</h4>
                                <h4 className="white">Book Team Lunch</h4>
                                <h4 className="white">Quick Cake Delivery</h4>
                                <h4 className="white">Birthday Cakes</h4>
                            </div>


                        </div>

                    </div>


                </div>
            </div>

            {/* Copyright Footer */}
            <footer style={{ backgroundColor: 'black', padding: '20px 0', color: 'white', textAlign: 'center' }}>
                <div className="d-flex justify-content-center fs-20 pt-1" >
                    <div>Quicklinks:&nbsp;&nbsp;&nbsp;</div>
                    <Link to='/hifivecafe'><h5 className="hov-link fs-20 orange mob-fs-16 pe-3 pt-1">Hifive Cafe </h5></Link>
                    <Link to='/hifivebirthday'><h5 className="hov-link fs-20 orange mob-fs-16 pe-3 pt-1">Hifive Birthday </h5></Link>
                    <Link to='/hifivecandlelight'><h5 className="hov-link fs-20 orange mob-fs-16 pe-3 pt-1">Hifive Candle Light Dinner</h5></Link>
                    <Link to='/hifivevalentines'><h5 className="hov-link fs-20 orange mob-fs-16 pe-3 pt-1">Hifive Valentine's Day</h5></Link>
                    <Link to='/hifivebridetobe'><h5 className="hov-link fs-20 orange mob-fs-16 pe-3 pt-1">Hifive Bride-to-be Celebration</h5></Link>
                    <Link to='/hifivecorporate'><h5 className="hov-link fs-20 orange mob-fs-16 pe-3 pt-1">Hifive Corporate Lunch & Dinner </h5></Link>
                    <Link to='/hifiveanniversary'><h5 className="hov-link fs-20 orange mob-fs-16 pe-3 pt-1">Hifive Anniversary Dinner & Celebration </h5></Link>
                </div>

                <div className="d-flex justify-content-center pt-4" >
                    <Link to='/terms_condition'><h5 className="grey mob-fs-18 pe-3">Terms & Condition </h5></Link>
                    <Link to='/privacy_policy'><h5 className="grey mob-fs-18 pe-3">Privacy Policy </h5></Link>
                    <Link to='/refund_policy'><h5 className="grey mob-fs-18 pe-3">Refund Policy </h5></Link>
                    <Link to='/shipping_policy'><h5 className="grey mob-fs-18 pe-3">Shipping Policy </h5></Link>
                </div>


                <p>&copy; {new Date().getFullYear()} {process.env.REACT_APP_CAFE_NAME}. All Rights Reserved.</p>
            </footer>

        </>
    )
}

export default Contact;
