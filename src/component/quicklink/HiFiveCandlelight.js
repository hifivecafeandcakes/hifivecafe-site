import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";
import '../../theme/css-component/quicklink.css';
import { Helmet } from 'react-helmet-async';
import WhatsAppLink from "../social/WhatsAppLink";
import InstagramLink from "../social/InstagramLink";
import FacebookLink from "../social/FacebookLink";

import reservationMob1 from '../../theme/image/reservation/res-mob1.png'
import reservationWeb1 from '../../theme/image/reservation/res-web1.png'

const HiFiveCandlelight = () => {

    const device = localStorage.getItem('device');

    return (
        <>
            <Helmet>
                <title>HiFive Cafe - Best Candlelight Dinner in Coimbatore</title>
                <meta
                    name="description"
                    content="Enjoy the most romantic candlelight dinner in Coimbatore at HiFive Cafe. Experience private couple dining, rooftop setups with live music, personalized décor, and luxury fine dining for anniversaries, date nights, and proposals."
                />
                <meta
                    name="keywords"
                    content="Best romantic candlelight dinner in Coimbatore, Private candlelight dinner for couples in Coimbatore, Rooftop candlelight dinner with live music, Best restaurant for date night in Coimbatore, Marriage proposal dinner setup in Coimbatore, Anniversary celebration restaurant with candlelight setup, Surprise candlelight dinner with personalized décor, Luxury fine dining & private dining experience in Coimbatore, Candlelight dinner home delivery & private chef services"
                />

                <meta name="author" content="HiFive Cafe Coimbatore" />
                <link rel="canonical" href="https://hifivecafe.in/sub_cat/3" />
            </Helmet>

            <div className="white quicklink">
                <Link to="/" className="home-link">Home</Link>
<Link to="/contact" className="contact-link">Contact</Link>

                <div className='row home_row_1'>
                    <div className='col-lg-12 home_col_2'>
                        <div>
                            <Link to="/sub_cat/1" className="btn quicklink_btn quicklink-btn">Book Your Candle Light Dinner !</Link>
                            <img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} >
                            </img>
                        </div>
                    </div>
                </div>

                <h1 className="text-center mt-3">💖 HiFive Cafe - Best Candlelight Dinner in Coimbatore 🌹</h1>
                <h5 className="mt-3 mb-5 text-center">
                    Looking for the best romantic candlelight dinner in Coimbatore? HiFive Cafe offers an enchanting experience with cozy ambiance, intimate lighting, and a specially curated menu.
                </h5>

                <div className="eachDiv">
                    <h2>🌟 Why Choose HiFive Cafe for Your Candlelight Dinner?</h2>
                    <ul>
                        <li>✅ Most romantic candlelight dinner restaurant in Coimbatore</li>
                        <li>✅ Private table setup with flowers, candles & fairy lights</li>
                        <li>✅ Rooftop dining & indoor private seating options</li>
                        <li>✅ 3-course & 5-course gourmet candlelight dinner menu</li>
                        <li>✅ Personalized decorations & custom surprise arrangements</li>
                        <li>✅ Live music & special playlist for your evening</li>
                        <li>✅ Affordable candlelight dinner packages</li>
                    </ul>
                    <Link to="/sub_cat/1" className="btn home_action2_btn">👉 Book your candlelight dinner now!</Link>
                </div>

                <div className="eachDiv">
                    <h2>💖 Candlelight Dinner Packages at HiFive Cafe</h2>

                    <h3>1️⃣ Classic Candlelight Dinner for Couples</h3>
                    <ul>
                        <li>🌹 Romantic table setup with candles & floral décor</li>
                        <li>🍷 Welcome drink & chef’s special starters</li>
                        <li>🍽️ 3-course dinner with signature continental dishes</li>
                        <li>🎶 Soft background music for a magical vibe</li>
                        <li>💌 Custom handwritten note or gift placement</li>
                    </ul>
                    <Link to="/sub_cat/1" className="btn home_action2_btn">👉 Reserve a classic candlelight dinner</Link>

                    <h3>2️⃣ Rooftop Candlelight Dinner | Open-Air Romance</h3>
                    <ul>
                        <li>✨ Exclusive rooftop seating with fairy lights & lanterns</li>
                        <li>🍷 Premium 5-course meal with exotic delicacies</li>
                        <li>🎻 Live violinist/special playlist on request</li>
                        <li>📸 Candid photography & personalized photo frames</li>
                        <li>🎁 Surprise cake & dessert platter available</li>
                    </ul>
                    <Link to="/sub_cat/1" className="btn home_action2_btn">👉 Book a rooftop candlelight dinner</Link>

                    <h3>3️⃣ Surprise Proposal & Anniversary Celebration</h3>
                    <ul>
                        <li>💍 "Will You Marry Me?" LED backdrop & floral arch</li>
                        <li>🍾 Champagne/mocktail to toast your special moment</li>
                        <li>🎶 Live guitarist or personalized song request</li>
                        <li>🎂 Custom cake & chocolate-dipped strawberries</li>
                        <li>📸 Professional photography/videography services available</li>
                    </ul>
                    <Link to="/sub_cat/1" className="btn home_action2_btn">👉 Plan your dream proposal</Link>
                </div>



                <div className="eachDiv">
                    <h2>🍽️ Exclusive Candlelight Dinner Menu | Fine Dining Experience</h2>
                    <ul>
                        <li>🍲 Exotic soups & handcrafted appetizers</li>
                        <li>🥗 Signature salads & gourmet entrées</li>
                        <li>🥘 Premium pasta, grilled mains & wood-fired pizzas</li>
                        <li>🍮 Luxury desserts like tiramisu & molten lava cake</li>
                        <li>🍷 Mocktails, fresh juices & organic coffee</li>
                    </ul>
                    <Link to="/menu" className="btn home_action2_btn">👉 View our full menu</Link>
                </div>

                <div className="eachDiv">
                    <h2>🎊 Special Add-Ons for a Personalized Experience</h2>
                    <ul>
                        <li>✨ Themed candlelight dinner setups (Paris, Boho, Royal, Garden theme)</li>
                        <li>🎤 Live band, violinist, or private musician arrangements</li>
                        <li>🎥 Romantic video screening & slideshow of your memories</li>
                        <li>🎁 Gift wrapping & personalized keepsake delivery</li>
                        <li>🌹 Premium bouquets & floral surprise upgrades</li>
                    </ul>
                    <Link to="/sub_cat/1" className="btn home_action2_btn">👉 Customize your candlelight dinner experience!</Link>
                </div>

                <div className="eachDiv">
                    <h2>🛵 Private Candlelight Dinner at Home | Luxury Dining Experience</h2>
                    <ul>
                        <li>✅ Personalized candlelight dinner at home setup</li>
                        <li>✅ Chef-prepared luxury meal delivered to your doorstep</li>
                        <li>✅ Customized décor kit & surprise gift options</li>
                    </ul>
                    <Link to="/sub_cat/1" className="btn home_action2_btn">👉 Book an at-home candlelight dinner experience</Link>
                </div>


                <div className="eachDiv">
                    <h2>📍 HiFive Cafe Location & Contact for Reservations</h2>
                    <p><FaMapMarkerAlt className="mr-2" /> Address: {process.env.REACT_APP_ADDRESS}</p>
                    <p><FaPhone className="mr-2" /> Call/WhatsApp: {process.env.REACT_APP_CALL_NUMBER}/{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
                    <p><FaGlobe className="mr-2" /><Link to="/"> hifivecafe.in</Link></p>
                </div>

                <div className="eachDiv text-center">
                    <h2 className="">📱 Follow HiFive Cafe for Romantic Dining Offers & Exclusive Events
                        Stay updated on our seasonal candlelight dinner packages & special events!
                    </h2>
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

export default HiFiveCandlelight;
