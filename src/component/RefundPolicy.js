import React from 'react';
import LOGO from '../theme/image/logo.png'
import { Link } from 'react-router-dom';

const RefundPolicy = () => {

    const currentDate = new Date().toLocaleDateString();

    return (


        <div className='container-fluid' style={{ color: "black", backgroundColor: 'black', color: 'white' }}>
            <div style={{ textAlign: 'center' }}>
                <Link to="/">
                    <img src={LOGO} className='footet-logo-image' alt="Hifive Logo" />
                </Link>
            </div>
            <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '80px', lineHeight: '1.6', }}>
                <h1 style={{ textAlign: 'center' }}>Refund Policy</h1>
                <h2>Returns</h2>
                <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.</p>
                <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers, or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>

                <h3>Additional non-returnable items:</h3>
                <ul>
                    <li>Gift cards</li>
                    <li>Downloadable software products</li>
                    <li>Some health and personal care items</li>
                </ul>

                <p>To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer.</p>

                <p>There are certain situations where only partial refunds are granted (if applicable):</p>
                <ul>
                    <li>Book with obvious signs of use</li>
                    <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</li>
                    <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
                    <li>Any item that is returned more than 30 days after delivery</li>
                </ul>

                <h2>Refunds (if applicable)</h2>
                <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

                <h2>Late or missing refunds (if applicable)</h2>
                <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company; it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted.</p>
                <p>If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:{process.env.REACT_APP_CONTACT_EMAIL}">{process.env.REACT_APP_CONTACT_EMAIL}</a>.</p>

                <h2>Sale items (if applicable)</h2>
                <p>Only regular priced items may be refunded, unfortunately, sale items cannot be refunded.</p>

                <h2>Exchanges (if applicable)</h2>
                <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:{process.env.REACT_APP_CONTACT_EMAIL}">{process.env.REACT_APP_CONTACT_EMAIL}</a> and send your item to: 622 Manglam Electronic Market Jaipur Rajasthan India 302001.</p>

                <h2>Gifts</h2>
                <p>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
                <p>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return.</p>

                <h2>Shipping</h2>
                <p>To return your product, you should mail your product to: 622 Manglam Electronic Market Jaipur Rajasthan India 302001.</p>
                <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
                <p>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>


            </div>
        </div>
    );
};

export default RefundPolicy;
