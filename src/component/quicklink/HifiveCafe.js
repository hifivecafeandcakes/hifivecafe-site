import React from "react";
// import { Button } from "@/components/ui/button";
import { Button } from "react-bootstrap";
import '../../theme/css-component/quicklink.css'

import { FaMapMarkerAlt, FaPhone, FaGlobe, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import InstagramLink from "../social/InstagramLink";
import FacebookLink from "../social/FacebookLink";
import WhatsAppLink from "../social/WhatsAppLink";
import { Link } from "react-router-dom";

import reservationMob1 from '../../theme/image/reservation/res-mob1.png'
import reservationWeb1 from '../../theme/image/reservation/res-web1.png'
import { Helmet } from 'react-helmet-async';


const HiFiveCafe = () => {

    const device = localStorage.getItem('device');

    console.log(device);

    return (
        <>
            <Helmet>
                <title>Welcome to HiFive Cafe, where great food meets a healthy lifestyle!</title>
                <meta name="description" content="We are a continental restaurant in Coimbatore dedicated to serving nutritious, delicious, and freshly prepared dishes" />
                <meta name="keywords" content="Wholesome breakfast options" />
                <meta name="keywords" content="Freshly brewed coffee & refreshing beverages" />
                <meta name="keywords" content="Gourmet sandwiches, wraps, and salads" />
                <meta name="keywords" content="Exotic pasta, wood-fired pizzas, and protein-packed meals" />
                <meta name="keywords" content="Planning a special outing? Reserve your table online." />
                <meta name="keywords" content="Guilt-free desserts & keto-friendly delights" />
                <meta name="keywords" content="Group dining & celebrations" />
                <meta name="keywords" content="Private candlelight dinners" />
                <meta name="keywords" content="Customized meal plans" />

                <meta name="keywords" content="anniversary celebrations in Coimbatore, birthday celebrations in Coimbatore, romantic proposal setups in Coimbatore, live music in Coimbatore, weekend specials in Coimbatore" />
                <meta name="keywords" content="customized healthy meal plans in Coimbatore, continental buffet spreads in Coimbatore, specialty desserts in Coimbatore, event catering in Coimbatore" />
                <meta name="keywords" content="marriage proposal setups, engagement setups, live music events, weekend specials" />
                <meta name="keywords" content="online food delivery Coimbatore, order healthy food, Swiggy Coimbatore, Zomato Coimbatore, WhatsApp food order, contactless takeaway, customized meal prep, meal subscription plans" />


                <meta name="keywords" content="Best birthday party venue in Saravanampatti Coimbatore" />
                <meta name="keywords" content="Marriage proposal & engagement setups venue in Saravanampatti Coimbatore" />
                <meta name="keywords" content="Weekend Specials venue in Saravanampatti Coimbatore" />

                <meta name="keywords" content="Best romantic Valentine’s Day dinner in Saravanampatti" />
                <meta name="keywords" content="Best romantic Valentine’s Day dinner in Coimbatore" />


            </Helmet>

            <div className="white quicklink">

                <div className='row home_row_1'>
                    <div className='col-lg-12 home_col_2'>
                        <div><img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} ></img></div>
                    </div>
                </div>

                <h1 className="text-center mt-3">HiFive Cafe</h1>
                <h5 className="mt-3 mb-5 text-center">
                    Welcome to HiFive Cafe, where great food meets a healthy lifestyle! We are a continental restaurant in Coimbatore dedicated to serving nutritious, delicious, and freshly prepared dishes.
                </h5>

                <div className="eachDiv">
                    <h2 className="">🍽️ Our Menu</h2>
                    <ul className="">
                        <li>✅ Wholesome breakfast options</li>
                        <li>✅ Freshly brewed coffee & refreshing beverages</li>
                        <li>✅ Gourmet sandwiches, wraps, and salads</li>
                        <li>✅ Exotic pasta, wood-fired pizzas, and protein-packed meals</li>
                        <li>✅ Guilt-free desserts & keto-friendly delights</li>
                    </ul>
                    <Link to="/menu" className="btn home_action2_btn ">Visit Menu Page</Link>
                </div>

                <div className="eachDiv">
                    <h2 className="">🌟 Book a Table / Reservations</h2>
                    <p className="">Planning a special outing? Reserve your table online.</p>
                    <ul className="">
                        <li>💖 Private candlelight dinners</li>
                        <li>🎉 Group dining & celebrations</li>
                        <li>🥗 Customized meal plans</li>
                    </ul>
                    <Link to="/reservation" className="btn home_action2_btn ">Reservation Page</Link>
                </div>

                <div className="eachDiv">
                    <h2 className="">🎊 Special Events & Celebrations</h2>
                    <p className="">Make every moment special at HiFive Cafe!</p>
                    <ul>
                        <li>✨ Anniversary & birthday celebrations in Coimbatore</li>
                        <li>💍 Romantic proposal setups in Coimbatore</li>
                        <li>💖 Romantic rooftop candlelight dinner in Coimbatore</li>
                        <li>🎶 Live music & weekend specials in Coimbatore</li>
                        <li>🥗 Corporate dining with customized healthy meals in Coimbatore</li>
                        <li>💍 Marriage proposal & engagement setups</li>
                        <li>🎶 Live music events & weekend specials</li>
                        <li>🥗 Healthy Catering Services | Office & Event Catering in Coimbatore</li>
                        <li>🍲 Corporate event catering with nutritious meal plans</li>
                        <li>🥗 Wedding & party catering with continental dishes</li>
                        <li>🎂 Healthy dessert options & customized cake orders</li>
                    </ul>
                    <Link to="/contact" className="btn home_action2_btn ">Event Booking</Link>
                </div>

                <div className="eachDiv">
                    <h2 className="">🥗 Healthy Catering Services</h2>
                    <p className="">Bring the HiFive experience to your corporate events, parties, and gatherings.</p>
                    <ul>
                        <li>🍲 Customized healthy meal plans</li>
                        <li>🥗 Continental buffet spreads</li>
                        <li>🎂 Specialty desserts & event catering</li>
                    </ul>
                    <Link to="/contact" className="btn home_action2_btn ">Catering Inquiry</Link>
                </div>

                <div className="eachDiv">
                    <h2 className="">📍 Location & Contact</h2>
                    <p className=""><FaMapMarkerAlt className="mr-2" /> Address: {process.env.REACT_APP_ADDRESS}</p>
                    <p className=""><FaPhone className="mr-2" /> Call/WhatsApp: {process.env.REACT_APP_CALL_NUMBER}/{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
                    <p className=""><FaGlobe className="mr-2" />
                        <Link to="/" className="text-blue-500"> hifivecafe.in</Link>
                    </p>
                </div>

                <div className="eachDiv text-center">
                    <h2 className="">📱 Follow Us on Social Media</h2>
                    <ul>
                        <li>🛵 Online Food Delivery | Order Healthy Food in Coimbatore</li>
                        <li>✅ Swiggy & Zomato – Fast food delivery in Coimbatore</li>
                        <li>✅ WhatsApp Order & Takeaway – Contactless pickup available</li>
                        <li>✅ Customized Meal Prep & Subscription Plans</li>
                    </ul>

                    <div className="">
                        <WhatsAppLink />
                        <InstagramLink />
                        <FacebookLink />
                    </div>
                </div>

            </div>
        </>
    );
};

export default HiFiveCafe;
