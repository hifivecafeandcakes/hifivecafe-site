import React from 'react';
import LOGO from '../theme/image/logo.png'
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {

    const currentDate = new Date().toLocaleDateString();

    return (


        <div className='container-fluid' style={{ color: "black", backgroundColor: 'black', color: 'white' }}>
            <div style={{ textAlign: 'center' }}>
                <Link to="/">
                    <img src={LOGO} className='footet-logo-image' alt="Hifive Logo" />
                </Link>
            </div>
            <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '80px', lineHeight: '1.6', }}>
                <h1 style={{ textAlign: 'center' }}>Hifive Shipping Policy</h1>
                <p>This document sets out the shipping policy that applies to customers that make a purchase at HifiveCafe.com. If you have any questions, please contact our customer service team on +91-{process.env.REACT_APP_CALL_NUMBER} or <a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a>.</p>

                <h2>Shipping Options & Delivery Costs</h2>
                <p>We offer the following shipping options - you will be asked to select a shipping method at checkout.</p>
                <p><strong>Coimbatore In and Around</strong> – Max 250 INR (depends on weight, price will be calculated accordingly)</p>

                <h2>Order Processing Time</h2>
                <p>All orders placed before 2 PM Monday to Friday are processed and dispatched the same day. All orders placed after 2 PM will be dispatched the next day. Orders placed during the weekend or on a public holiday will be sent from our warehouse on Monday or on the next business day.</p>

                <h2>Delivery Address & P.O. Boxes</h2>
                <p>Please note that we are unable to modify the delivery address once you have placed your order. We are sorry but we do not ship to P.O. boxes.</p>

                <h2>International Orders</h2>
                <p>Your package may be subject to import duties and taxes. You, as the customer, are responsible for paying those fees. We recommend that you check with your local customs office before placing an order on our website as these fees can sometimes be significant, and we are unable to calculate these for you.</p>

                <h2>Tracking Your Order</h2>
                <p>Once your order has been dispatched, we will send you a confirmation email with tracking information. You will be able to track your package directly on the carrier’s website.</p>

                <h2>Returns, Refunds, and Exchanges</h2>
                <p>We want you to be completely happy with your purchase - please read our <Link to="refund">return & refund policy</Link> for detailed information about our processes.</p>


            </div>
        </div>
    );
};

export default ShippingPolicy;
