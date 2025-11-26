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

const HiFiveBirthday = () => {
    const device = localStorage.getItem('device');

    console.log(device);
    return (
        <>
            <Helmet>
                <title>HiFive Cafe - Best Birthday Celebration Venue in Coimbatore</title>
                <meta
                    name="description"
                    content="Celebrate birthdays in style at HiFive Cafe, Coimbatore's top restaurant for birthday parties. Enjoy themed decorations, rooftop dining, candlelight dinners, kids' party setups, live music, custom cakes, and catering services."
                />
                <meta
                    name="keywords"
                    content="Best birthday celebration restaurant in Coimbatore, Birthday party venue with decorations in Coimbatore, Romantic birthday candlelight dinner in Coimbatore, Kids’ birthday party restaurant with customized themes, Birthday party packages & group dining offers, Live music & rooftop birthday dinner in Coimbatore, Birthday cake delivery & customized dessert orders, Healthy party food catering in Coimbatore, Swiggy Zomato food & birthday cake delivery in Coimbatore"
                />

                <meta name="author" content="HiFive Cafe Coimbatore" />
                <link rel="canonical" href="https://hifivecafe.in/sub_cat/2" />
            </Helmet>

            <div className="white quicklink">
                <Link to="/" className="home-link">Home</Link>
<Link to="/contact" className="contact-link">Contact</Link>

                <div className='row home_row_1'>
                    <div className='col-lg-12 home_col_2'>
                        <div>
                            <Link to="/sub_cat/2" className="btn quicklink_btn quicklink-btn">Book Birthday Party !</Link>
                            <img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} >
                            </img>
                        </div>
                    </div>
                </div>

                <h1 className="text-center mt-3">HiFive Cafe - Best Birthday Celebration Venue in Coimbatore 🎂</h1>

                <h5 className="mt-3 mb-5 text-center">

                    Looking for the best birthday celebration restaurant in Coimbatore? Celebrate your special day with a unique and memorable experience at HiFive Cafe! Whether it’s a private birthday dinner, a surprise party, or a kids’ birthday celebration, we offer customized decorations, delicious continental food, and a lively ambiance to make your celebration unforgettable.
                </h5>

                <div className="eachDiv">

                    <h2>🎊 Why Choose HiFive Cafe for Your Birthday Party?</h2>
                    <ul>
                        <li>✅ Best birthday party venue in Coimbatore</li>
                        <li>✅ Private candlelight dinner & rooftop birthday setups</li>
                        <li>✅ Custom birthday decorations with balloons & fairy lights</li>
                        <li>✅ Special birthday cakes & dessert customization</li>
                        <li>✅ Live music, personalized playlists & surprise arrangements</li>
                        <li>✅ Healthy & delicious continental food options</li>
                        <li>✅ Affordable birthday party packages & group dining discounts</li>
                    </ul>

                    <Link to="/sub_cat/2" className="btn home_action2_btn">👉 Plan your birthday celebration now!</Link>
                </div>
                <div className="eachDiv">
                    <h2>🎂 Birthday Celebration Packages at HiFive Cafe</h2>

                    <h3>1️⃣ Private Birthday Candlelight Dinner</h3>
                    <p>Perfect for couples & intimate celebrations. Enjoy:</p>
                    <ul>
                        <li>💖 Romantic table setup with candles & flowers</li>
                        <li>🍽️ 3-course meal with exotic continental dishes</li>
                        <li>🎶 Soft background music & private service</li>
                        <li>🎁 Personalized birthday cake & gift arrangements</li>
                    </ul>
                    <Link to="/sub_cat/2" className="btn home_action2_btn">👉 Book a romantic birthday dinner</Link>

                </div>

                <div className="eachDiv">


                    <h3>2️⃣ Birthday Party for Friends & Family</h3>
                    <p>Ideal for group celebrations with:</p>
                    <ul>
                        <li>🎈 Customized birthday decorations (balloons, banners, LED lights)</li>
                        <li>🍕 Party menu with pizzas, pastas, gourmet burgers & desserts</li>
                        <li>📸 Photography & fun props for memorable pictures</li>
                        <li>🎤 Live music or DJ options available</li>
                    </ul>
                    <Link to="/sub_cat/2" className="btn home_action2_btn">👉 Reserve a group birthday party</Link>

                </div>
                <div className="eachDiv">

                    <h3>3️⃣ Kids’ Birthday Party Venue in Coimbatore</h3>
                    <p>Make your child’s birthday extra special with:</p>
                    <ul>
                        <li>🎨 Fun-themed decorations (cartoon, superhero, fairy tale themes)</li>
                        <li>🎂 Healthy & tasty kids’ menu options</li>
                        <li>🎁 Return gifts & entertainment activities</li>
                        <li>🎶 Interactive games, music & storytelling sessions</li>
                    </ul>
                    <Link to="/sub_cat/2" className="btn home_action2_btn">👉 Book a kids' birthday party now!</Link>

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
                    <h2 className="">📱 Follow HiFive Cafe for Birthday Offers & Party Ideas
                        Stay updated on exclusive birthday offers, party packages, and live events!
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

export default HiFiveBirthday;
