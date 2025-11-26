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

const HiFiveAnniversary = () => {
    const device = localStorage.getItem('device');
    return (
        <>
            <Helmet>
                <title>HiFive Cafe - Best Anniversary Dinner & Celebration Venue in Coimbatore</title>
                <meta
                    name="description"
                    content="Celebrate your anniversary with a romantic candlelight dinner, rooftop dining, or private party at HiFive Cafe in Coimbatore. Enjoy live music, personalized cakes, and luxury couple experiences."
                />
                <meta
                    name="keywords"
                    content="Best anniversary dinner in Coimbatore, Romantic candlelight dinner for couples, Luxury rooftop anniversary celebration, Private anniversary party venue in Coimbatore, Surprise anniversary date ideas in Coimbatore, Personalized anniversary cake & gift arrangements, Best restaurant for anniversary celebration in Coimbatore, Wedding anniversary dinner with live music, Private couple dining experience & themed decorations"
                />
                <meta name="author" content="HiFive Cafe Coimbatore" />
                <link rel="canonical" href="https://hifivecafe.in" />
            </Helmet>


            <div className="white quicklink">
                <Link to="/" className="home-link">Home</Link>
<Link to="/contact" className="contact-link">Contact</Link>


                <div className='row home_row_1'>
                    <div className='col-lg-12 home_col_2'>
                        <div>
                            <Link to="/reservation" className="btn quicklink_btn quicklink-btn">Book Best Anniversary Celebration !</Link>
                            <img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} >
                            </img>
                        </div>
                    </div>
                </div>

                <h1 className="text-center mt-3">💖 HiFive Cafe - Best Anniversary Celebration Venue in Coimbatore 🎉</h1>
                <h5 className="mt-3 mb-5 text-center">
                    Celebrate your wedding anniversary, relationship milestone, or special love story at HiFive Cafe! Whether it’s an intimate candlelight dinner, a surprise anniversary party, or a grand celebration, we create unforgettable moments.
                </h5>

                <div className="eachDiv">
                    <h2>💍 Why Choose HiFive Cafe for Your Anniversary Celebration?</h2>
                    <ul>
                        <li>✅ Best anniversary dinner & romantic date night spot in Coimbatore</li>
                        <li>✅ Private candlelight dinner with fairy lights & floral decor</li>
                        <li>✅ Rooftop & luxury indoor dining with a dreamy ambiance</li>
                        <li>✅ Customized anniversary cakes & gourmet multi-course meals</li>
                        <li>✅ Live music, violinist, and personalized song requests</li>
                        <li>✅ Surprise setups, photo booths & special couple gifts</li>
                        <li>✅ Affordable anniversary celebration packages</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book your anniversary celebration now!</Link>
                </div>

                <div className="eachDiv">
                    <h2>🎊 Anniversary Celebration Packages at HiFive Cafe</h2>

                    <h3>1️⃣ Romantic Candlelight Dinner for Two</h3>
                    <ul>
                        <li>🌹 Exclusive table setup with candles, flowers & fairy lights</li>
                        <li>🍷 Welcome mocktail & signature starters</li>
                        <li>🍽️ 3-course gourmet meal with continental delicacies</li>
                        <li>🎶 Soft romantic music & candlelit ambiance</li>
                        <li>💌 Custom love note or surprise gift placement</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book a candlelight dinner</Link>

                    <h3>2️⃣ Rooftop Anniversary Celebration | Under the Stars</h3>
                    <ul>
                        <li>✨ Rooftop setup with elegant fairy lights & cozy seating</li>
                        <li>🥂 Premium 5-course meal with gourmet dishes</li>
                        <li>🎻 Live violinist or guitarist for a magical vibe</li>
                        <li>📸 Candid photography & personalized anniversary photo frame</li>
                        <li>🎁 Surprise chocolate box & customized dessert platter</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Reserve your rooftop anniversary dinner</Link>

                    <h3>3️⃣ Grand Anniversary Party with Family & Friends</h3>
                    <ul>
                        <li>🎈 Customized event décor with floral backdrop & LED lights</li>
                        <li>🍽️ Buffet or plated dinner with a premium menu selection</li>
                        <li>🎤 Live music, DJ, or instrumental band for entertainment</li>
                        <li>📷 Professional photography & video highlights</li>
                        <li>🎁 Personalized anniversary cake & couple gift hampers</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Plan your grand anniversary party</Link>
                </div>



                <div className="eachDiv">
                    <h2>🍽️ Anniversary Special Menu | Fine Dining Experience</h2>
                    <ul>
                        <li>🍲 Exotic soups & handcrafted appetizers</li>
                        <li>🥗 Signature salads & gourmet main courses</li>
                        <li>🍝 Luxury pasta, grilled entrees & wood-fired pizzas</li>
                        <li>🍮 Romantic desserts like chocolate fondue & tiramisu</li>
                        <li>🍹 Mocktails, fresh juices & premium coffee selections</li>
                    </ul>
                    <Link to="/menu" className="btn home_action2_btn">👉 View our anniversary special menu</Link>
                </div>

                <div className="eachDiv">
                    <h2>🎁 Anniversary Surprises & Special Add-Ons</h2>
                    <ul>
                        <li>✨ Personalized couple gifts & photo albums</li>
                        <li>🎥 Romantic video screening & slideshow of your love journey</li>
                        <li>🌹 Customized floral arrangements & surprise gift setups</li>
                        <li>🎤 Live performance or private musician for your special song</li>
                        <li>💌 Handwritten love note or memory jar experience</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Customize your anniversary celebration!</Link>
                </div>

                <div className="eachDiv">
                    <h2>🛵 At-Home Anniversary Celebration | Private Dining Experience</h2>
                    <ul>
                        <li>✅ Luxury meal delivered with a romantic table setup kit</li>
                        <li>✅ Candlelight, flower décor & surprise elements</li>
                        <li>✅ Personalized menu & anniversary cake delivery</li>
                    </ul>
                    <Link to="/sub_cat/3" className="btn home_action2_btn">👉 Book a private anniversary dinner at home</Link>
                </div>

                <div className="eachDiv">
                    <h2>📍 HiFive Cafe Location & Contact for Anniversary Reservations</h2>
                    <p><FaMapMarkerAlt className="mr-2" /> Address: {process.env.REACT_APP_ADDRESS}</p>
                    <p><FaPhone className="mr-2" /> Call/WhatsApp: {process.env.REACT_APP_CALL_NUMBER}/{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
                    <p><FaGlobe className="mr-2" /><Link to="/"> hifivecafe.in</Link></p>
                </div>


                <div className="eachDiv text-center">
                    <h2 className="">📱 Follow HiFive Cafe for Anniversary Offers & Romantic Dining Ideas
                        Stay updated on exclusive anniversary deals, couple dining experiences, and special celebrations!
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

export default HiFiveAnniversary;
