import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";
import '../../theme/css-component/quicklink.css';
import { Helmet } from 'react-helmet-async';

import InstagramLink from "../social/InstagramLink";
import FacebookLink from "../social/FacebookLink";
import WhatsAppLink from "../social/WhatsAppLink";

import reservationMob1 from '../../theme/image/reservation/res-mob1.png'
import reservationWeb1 from '../../theme/image/reservation/res-web1.png'

const HiFiveCorporate = () => {
    const device = localStorage.getItem('device');
    return (
        <>
            <Helmet>
                <title>HiFive Cafe - Best Corporate Lunch & Dinner in Coimbatore</title>
                <meta
                    name="description"
                    content="Host your corporate lunch, business dinner, or team meeting at HiFive Cafe in Coimbatore. Enjoy private dining rooms, gourmet menus, and professional service tailored for business events."
                />
                <meta
                    name="keywords"
                    content="Best corporate lunch venue in Coimbatore, Business lunch meeting restaurant with private space, Executive dinner & fine dining restaurant in Coimbatore, Corporate team lunch with customized menu, Private dining rooms for business meetings, Luxury business dinner with gourmet menu, Networking event venue with premium services, Annual corporate party & company dinner venue, Best restaurant for client meetings & professional dining"
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
                            <Link to="/reservation" className="btn quicklink_btn quicklink-btn">Book Corporate Lunch & Dinner !</Link>
                            <img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} >
                            </img>
                        </div>
                    </div>
                </div>

                <h1 className="text-center mt-3">🍽️ HiFive Cafe - Best Corporate Lunch & Dinner in Coimbatore 🏢</h1>
                <h5 className="mt-3 mb-5 text-center">
                    Looking for a professional yet stylish venue for your corporate lunch, business dinner, or team gathering? HiFive Cafe offers the perfect ambiance, curated menus, and premium service to make your corporate events a success.
                </h5>

                <div className="eachDiv">
                    <h2>💼 Why Choose HiFive Cafe for Corporate Dining?</h2>
                    <ul>
                        <li>✅ Best corporate lunch & business dinner venue in Coimbatore</li>
                        <li>✅ Private dining rooms & exclusive event spaces</li>
                        <li>✅ Customized buffet or à la carte corporate menus</li>
                        <li>✅ Fast service & professional hospitality for business meetings</li>
                        <li>✅ High-speed WiFi & presentation setup available</li>
                        <li>✅ Affordable corporate meal packages</li>
                        <li>✅ Custom branding options for corporate events</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book your corporate lunch/dinner now!</Link>
                </div>

                <div className="eachDiv">
                    <h2>📊 Corporate Lunch & Dinner Packages at HiFive Cafe</h2>

                    <h3>1️⃣ Business Lunch Meetings | Quick & Efficient Dining</h3>
                    <ul>
                        <li>🍽️ Fixed lunch menu with express service</li>
                        <li>📶 Complimentary high-speed WiFi & charging stations</li>
                        <li>🍵 Refreshing beverages & healthy meal options</li>
                        <li>🔹 Private meeting rooms with presentation setup available</li>
                        <li>💼 Custom branding (company logo on menu, table setup, etc.)</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Reserve a business lunch meeting</Link>

                    <h3>2️⃣ Corporate Team Lunch | Casual & Engaging</h3>
                    <ul>
                        <li>✨ Group seating with lively ambiance</li>
                        <li>🍕 Shared platters, gourmet entrees & chef’s special dishes</li>
                        <li>🎉 Team-building activities & interactive dining experiences</li>
                        <li>🍹 Signature mocktails & refreshing beverages</li>
                        <li>🎁 Special discounts for large corporate bookings</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Plan your corporate team lunch</Link>

                    <h3>3️⃣ Executive & Client Dinner | Fine Dining Experience</h3>
                    <ul>
                        <li>🌟 Private dining space with premium setup</li>
                        <li>🥂 Luxury 5-course meal with gourmet continental cuisine</li>
                        <li>🍷 Exclusive wine/mocktail pairings for a fine dining touch</li>
                        <li>📊 Presentation & discussion-friendly ambiance</li>
                        <li>📸 Professional photography & branding opportunities</li>
                    </ul>
                    <Link to="/contact" className="btn home_action2_btn">👉 Book an executive corporate dinner</Link>

                    <h3>4️⃣ Corporate Events & Annual Dinners</h3>
                    <ul>
                        <li>🎈 Customized themed decor & branding options</li>
                        <li>🎤 Live music, entertainment & interactive sessions</li>
                        <li>🍽️ Buffet or plated dinner with premium menu selection</li>
                        <li>📷 Event photography, videography & media coverage</li>
                        <li>🎁 Corporate gifting & personalized takeaway options</li>
                    </ul>
                    <Link to="/contact" className="btn home_action2_btn">👉 Plan your corporate event now!</Link>
                </div>



                <div className="eachDiv">
                    <h2>🍽️ Corporate Menu | Tailored for Business Dining</h2>
                    <ul>
                        <li>🍲 Exotic soups & premium starters</li>
                        <li>🥗 Healthy & power-packed salads</li>
                        <li>🥘 Continental main course, pasta & grilled delicacies</li>
                        <li>🍕 Wood-fired pizzas & fusion dishes</li>
                        <li>🍮 Luxury desserts & artisanal sweets</li>
                        <li>🍹 Mocktails, fresh juices & organic coffee selections</li>
                    </ul>
                    <Link to="/menu" className="btn home_action2_btn">👉 View our full corporate menu</Link>
                </div>

                <div className="eachDiv">
                    <h2>🔹 Special Corporate Add-Ons & Services</h2>
                    <ul>
                        <li>✨ Presentation/projector setup for business meetings</li>
                        <li>📊 Custom branding (logo placements, personalized menus, etc.)</li>
                        <li>🎤 Live music or soft instrumental background for a premium feel</li>
                        <li>🎁 Corporate gifting & thank-you takeaway options</li>
                        <li>🚗 Convenient parking & easy accessibility for business guests</li>
                    </ul>
                    <Link to="/contact" className="btn home_action2_btn">👉 Customize your corporate dining experience!</Link>
                </div>


                <div className="eachDiv">
                    <h2>📍 HiFive Cafe Location & Contact for Corporate Reservations</h2>
                    <p><FaMapMarkerAlt className="mr-2" /> Address: {process.env.REACT_APP_ADDRESS}</p>
                    <p><FaPhone className="mr-2" /> Call/WhatsApp: {process.env.REACT_APP_CALL_NUMBER}/{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
                    <p><FaGlobe className="mr-2" /><Link to="/"> hifivecafe.in</Link></p>
                </div>


                <div className="eachDiv text-center">
                    <h2 className="">📱 Follow HiFive Cafe for Exclusive Corporate Offers & Networking Events
                        Stay updated on business lunch deals, corporate networking events & VIP dining experiences!
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

export default HiFiveCorporate;
