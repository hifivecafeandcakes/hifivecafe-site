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


const HiFiveBrideToBe = () => {
    const device = localStorage.getItem('device');
    return (
        <>
            <Helmet>
                <title>HiFive Cafe - Best Bride-To-Be Celebration in Coimbatore</title>
                <meta
                    name="description"
                    content="Celebrate your bride-to-be party at HiFive Cafe in Coimbatore. Elegant bridal showers, fun bachelorette nights, gourmet dining, and unforgettable memories!"
                />
                <meta
                    name="keywords"
                    content="Bride-to-be party Coimbatore, bridal shower venue, bachelorette party Coimbatore, rooftop celebration, bride squad dinner, bride-to-be brunch"
                />
                <meta name="author" content="HiFive Cafe Coimbatore" />
                <link rel="canonical" href="https://hifivecafe.in/bride-to-be" />
            </Helmet>

            <div className="white quicklink">
                <Link to="/" className="home-link">Home</Link>
<Link to="/contact" className="contact-link">Contact</Link>

                <div className='row home_row_1'>
                    <div className='col-lg-12 home_col_2'>
                        <div>
                            <Link to="/sub_cat/1" className="btn quicklink_btn quicklink-btn">Book Your Best Bride-To-Be Celebration !</Link>
                            <img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} >
                            </img>
                        </div>
                    </div>
                </div>

                <h1 className="text-center mt-3">HiFive Cafe - Best Bride-To-Be Celebration Venue in Coimbatore 🎉</h1>
                <h5 className="mt-3 mb-5 text-center">
                    Looking for the perfect bride-to-be celebration in Coimbatore? HiFive Cafe offers the most elegant, fun, and memorable pre-wedding party experience for the bride and her squad!
                </h5>

                <div className="eachDiv">
                    <h2>👰 Why Choose HiFive Cafe for Your Bride-To-Be Celebration?</h2>
                    <ul>
                        <li>✅ Best bridal shower & bachelorette party venue in Coimbatore</li>
                        <li>✅ Private party space with customized decorations</li>
                        <li>✅ Luxury rooftop & indoor dining options</li>
                        <li>✅ Bride-to-be themed setup with balloons & fairy lights</li>
                        <li>✅ Customized desserts, signature cocktails & gourmet menu</li>
                        <li>✅ Fun games, music & personalized surprises</li>
                        <li>✅ Affordable bride-to-be party packages</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Plan your bride-to-be celebration now!</Link>
                </div>

                <div className="eachDiv">
                    <h2>💖 Bride-To-Be Celebration Packages at HiFive Cafe</h2>

                    <h3>1️⃣ Elegant Bridal Shower</h3>
                    <ul>
                        <li>🌸 Pastel-themed decor with flowers, candles & photo booth</li>
                        <li>🍰 Customized dessert table with cupcakes & bride-to-be cake</li>
                        <li>🥂 Signature mocktails & fine dining experience</li>
                        <li>🎶 Soft background music & fun interactive games</li>
                        <li>📸 Professional photography & instant Polaroid keepsakes</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book your elegant bridal shower</Link>

                    <h3>2️⃣ Fun Bachelorette Party | Bride Squad Celebration</h3>
                    <ul>
                        <li>🎈 Bride-to-be & bridesmaids sash, props & decorations</li>
                        <li>🍕 Gourmet party menu with signature drinks</li>
                        <li>🎤 Karaoke night, live DJ & fun dance party</li>
                        <li>📷 Selfie booth & instant photo album for memories</li>
                        <li>🎁 Surprise gifts & special treats for the bride</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Plan your bachelorette party</Link>

                    <h3>3️⃣ Rooftop Bride-To-Be Celebration | Luxe Dining & Party</h3>
                    <ul>
                        <li>✨ Exclusive rooftop setup with floral backdrop & LED lights</li>
                        <li>🍷 5-course luxury meal with premium continental dishes</li>
                        <li>🎻 Live violinist or personalized playlist for the night</li>
                        <li>📸 Candid photography & personalized digital album</li>
                        <li>🎁 Special surprise gift for the bride-to-be</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book a rooftop bride-to-be party</Link>
                </div>



                <div className="eachDiv">
                    <h2>🍽️ Exclusive Bride-To-Be Party Menu</h2>
                    <ul>
                        <li>🍲 Exotic starters & handcrafted appetizers</li>
                        <li>🍝 Signature pasta, wood-fired pizzas & gourmet mains</li>
                        <li>🍹 Mocktails, fresh juices & premium coffee selections</li>
                        <li>🍮 Bride-to-be themed desserts & customized cake</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 View our full menu</Link>
                </div>

                <div className="eachDiv">
                    <h2>🎊 Special Add-Ons for a Perfect Bride-To-Be Celebration</h2>
                    <ul>
                        <li>✨ Themed decor (Boho, Garden, Paris, Luxury themes)</li>
                        <li>🎤 Live band, karaoke, or DJ entertainment</li>
                        <li>🎥 Slideshow of bride’s special moments & video screening</li>
                        <li>🎁 Gift wrapping & personalized keepsake gifts</li>
                        <li>💃 Fun games, dance sessions & interactive activities</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Customize your bride-to-be celebration!</Link>
                </div>

                <div className="eachDiv">
                    <h2>🛵 Private Bride-To-Be Party at Home | Luxury Dining Setup</h2>
                    <ul>
                        <li>✅ Personalized bride-to-be celebration setup at home</li>
                        <li>✅ Luxury meal delivered by our chef</li>
                        <li>✅ Custom décor kit & surprise gift add-ons</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book a home bride-to-be celebration</Link>
                </div>

                <div className="eachDiv">
                    <h2>📍 HiFive Cafe Location & Contact for Bride-To-Be Celebrations</h2>
                    <p><FaMapMarkerAlt className="mr-2" /> Address: {process.env.REACT_APP_ADDRESS}</p>
                    <p><FaPhone className="mr-2" /> Call/WhatsApp: {process.env.REACT_APP_CALL_NUMBER}/{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
                    <p><FaGlobe className="mr-2" /><Link to="/"> hifivecafe.in</Link></p>
                </div>

                <div className="eachDiv text-center">
                    <h2 className="">📱 Follow HiFive Cafe for Bride-To-Be Party Offers & Event Ideas
                        Stay updated on exclusive bride-to-be party deals, fun celebration themes, and special packages!
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

export default HiFiveBrideToBe;
