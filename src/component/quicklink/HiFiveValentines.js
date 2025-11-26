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

const HiFiveValentines = () => {
    const device = localStorage.getItem('device');

    return (
        <>
            <Helmet>
                <title>HiFive Cafe - Best Valentine's Day Celebration in Coimbatore</title>
                <meta
                    name="description"
                    content="Celebrate Valentine's Day at HiFive Cafe in Coimbatore with a romantic rooftop dinner, private candlelight setup, live music, surprise date ideas, and luxury couple dining experiences."
                />
                <meta
                    name="keywords"
                    content="Best Valentine's Day dinner in Coimbatore, Romantic candlelight dinner for couples, Rooftop dinner with live music in Coimbatore, Valentine’s Day special restaurant in Coimbatore, Marriage proposal setup & anniversary dinner venue, Private Valentine's dinner with themed decorations, Luxury dining experience for couples in Coimbatore, Surprise Valentine’s date ideas in Coimbatore, Valentine's Day home dining & private chef services"
                />

                <meta name="author" content="HiFive Cafe Coimbatore" />
                <link rel="canonical" href="https://hifivecafe.in/" />
            </Helmet>

            <div className="white quicklink">
                <Link to="/" className="home-link">Home</Link>
<Link to="/contact" className="contact-link">Contact</Link>

                <div className='row home_row_1'>
                    <div className='col-lg-12 home_col_2'>
                        <div>
                            <Link to="/sub_cat/3" className="btn quicklink_btn quicklink-btn">Book Your Valentine's Day Celebration !</Link>
                            <img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} >
                            </img>
                        </div>
                    </div>
                </div>

                <h1 className="text-center mt-3">HiFive Cafe - Best Valentine's Day Celebration in Coimbatore 🌹</h1>
                <h5 className="mt-3 mb-5 text-center">
                    Celebrate Valentine’s Day 2025 with a romantic dining experience at HiFive Cafe! Whether you’re planning a candlelight dinner, a surprise date night, or a luxury rooftop dining experience, we have the perfect Valentine’s Day special for you.
                </h5>

                <div className="eachDiv">
                    <h2>💘 Why Choose HiFive Cafe for Valentine's Day 2025?</h2>
                    <ul>
                        <li>✅ Best romantic Valentine’s Day dinner in Coimbatore</li>
                        <li>✅ Private candlelight dinner with floral & fairy light setup</li>
                        <li>✅ Rooftop dining & cozy indoor seating options</li>
                        <li>✅ Live music, violinist & personalized song requests</li>
                        <li>✅ Customized Valentine's special 3-course & 5-course menu</li>
                        <li>✅ Surprise cake, chocolates & personalized gift arrangements</li>
                        <li>✅ Affordable Valentine's Day dinner packages</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Reserve your table now!</Link>
                </div>

                <div className="eachDiv">
                    <h2>🌹 Valentine's Day Special Packages at HiFive Cafe</h2>

                    <h3>1️⃣ Romantic Candlelight Dinner for Two</h3>
                    <ul>
                        <li>🌹 Private table with candles, flowers & themed decorations</li>
                        <li>🍷 Welcome mocktail & handcrafted starters</li>
                        <li>🍽️ 3-course meal with signature continental dishes</li>
                        <li>🎶 Soft romantic music & candlelit ambiance</li>
                        <li>💌 Custom love note or surprise gift placement</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book your Valentine's Candlelight Dinner</Link>

                    <h3>2️⃣ Rooftop Valentine's Dinner | Under the Stars</h3>
                    <ul>
                        <li>✨ Exclusive rooftop setup with fairy lights & cozy seating</li>
                        <li>🍷 Premium 5-course gourmet meal with exotic delicacies</li>
                        <li>🎻 Live violinist/saxophonist for a dreamy vibe</li>
                        <li>📸 Candid photography & personalized photo frame</li>
                        <li>🎁 Surprise chocolate box & dessert platter</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Reserve your rooftop Valentine's dinner</Link>

                    <h3>3️⃣ Valentine's Day Proposal & Surprise Date Setup</h3>
                    <ul>
                        <li>💍 "Will You Marry Me?" LED backdrop & floral arch</li>
                        <li>🍾 Champagne/mocktail toast for the big moment</li>
                        <li>🎶 Live guitarist or custom song performance</li>
                        <li>🎂 Personalized heart-shaped cake & sweet treats</li>
                        <li>📸 Professional photography & video recording</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Plan your surprise proposal</Link>
                </div>

                <div className="eachDiv">
                    <h2>🍽️ Valentine's Day Special Menu | Fine Dining for Couples</h2>
                    <ul>
                        <li>🍲 Exotic soups & handcrafted appetizers</li>
                        <li>🥗 Signature salads & gourmet entrees</li>
                        <li>🥘 Luxury pasta, grilled mains & wood-fired pizzas</li>
                        <li>🍮 Romantic desserts like chocolate lava cake & tiramisu</li>
                        <li>🍷 Mocktails, fresh juices & premium coffee selections</li>
                    </ul>
                    <Link to="/menu" className="btn home_action2_btn">👉 View our Valentine's Special Menu</Link>
                </div>

                <div className="eachDiv">
                    <h2>🎊 Special Valentine's Add-Ons for a Magical Evening</h2>
                    <ul>
                        <li>✨ Themed table decor (Paris, Garden, Royal, Boho themes)</li>
                        <li>🎤 Live band, violinist, or private musician options</li>
                        <li>🎥 Romantic video screening & slideshow of your memories</li>
                        <li>🎁 Gift wrapping & personalized keepsakes</li>
                        <li>🌹 Premium bouquets & floral surprises</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Customize your Valentine’s experience!</Link>
                </div>

                <div className="eachDiv">
                    <h2>🛵 Valentine’s Day at Home | Private Dining Experience</h2>
                    <ul>
                        <li>✅ Romantic candlelight dinner setup at home</li>
                        <li>✅ Luxury meal delivered by our chef for a private dining experience</li>
                        <li>✅ Custom décor kit & surprise gift add-ons</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book an at-home Valentine’s dinner experience</Link>
                </div>


                <div className="eachDiv">
                    <h2>📍 HiFive Cafe Location & Contact for Valentine's Reservations</h2>
                    <p><FaMapMarkerAlt className="mr-2" /> Address: {process.env.REACT_APP_ADDRESS}</p>
                    <p><FaPhone className="mr-2" /> Call/WhatsApp: {process.env.REACT_APP_CALL_NUMBER}/{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
                    <p><FaGlobe className="mr-2" /><Link to="/"> hifivecafe.in</Link></p>
                </div>

                <div className="eachDiv text-center">
                    <h2 className="">📱 Follow HiFive Cafe for Valentine's Day Offers & Romantic Dining Ideas
                        Stay updated on exclusive Valentine's deals, couple dining packages, and live events!
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

export default HiFiveValentines;
