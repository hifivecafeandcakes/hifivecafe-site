import React from 'react';
import LOGO from '../theme/image/logo.png'
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {

    const currentDate = new Date().toLocaleDateString();

    return (


        <div className='container-fluid' style={{ color: "black", backgroundColor: 'rgb(255, 238, 218)' }}>
            <div style={{ textAlign: 'center' }}>
                <Link to="/">
                    <img src={LOGO} className='footet-logo-image' alt="Hifive Logo" />
                </Link>
            </div>
            <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingBottom: '80px', lineHeight: '1.6', }}>
                <h1 style={{ textAlign: 'center' }}>Terms and Conditions</h1>
                <p>Effective Date: {currentDate}</p>

                <p>Welcome to the HiFive Cafe website (<a href="https://hifivecafe.in" className='blue'>hifivecafe.in</a>). By accessing or using our website, you agree to comply with and be bound by these terms and conditions. Please read them carefully before using the site.</p>

                <h2>1. General Information</h2>
                <p>1.1. The HiFive Cafe website is owned and operated by HiFive Cafe, [Business Address, City, State].</p>
                <p>1.2. These Terms and Conditions govern your use of the website and its services.</p>
                <p>1.3. By accessing this website, you acknowledge that you have read, understood, and agree to these terms.</p>

                <h2>2. Use of the Website</h2>
                <p>2.1. You must be at least 18 years old or have parental/guardian consent to use this website.</p>
                <p>2.2. You agree to use the website for lawful purposes only and not to engage in activities that could harm the website or its users.</p>
                <p>2.3. HiFive Cafe reserves the right to suspend or terminate your access to the website at any time, without notice, for violating these terms.</p>

                <h2>3. Intellectual Property</h2>
                <p>3.1. All content on this website, including text, images, graphics, and logos, is the intellectual property of HiFive Cafe unless otherwise stated.</p>
                <p>3.2. You may not reproduce, distribute, or use any content from this website without explicit written permission.</p>

                <h2>4. Menu and Pricing</h2>
                <p>4.1. The menu and pricing displayed on the website are for informational purposes only and may be subject to change without prior notice.</p>
                <p>4.2. HiFive Cafe is not responsible for errors in menu descriptions, prices, or availability.</p>

                <h2>5. Online Orders and Payments</h2>
                <p>5.1. Online orders placed through the website are subject to availability.</p>
                <p>5.2. Payments made through the website are processed securely. However, HiFive Cafe is not responsible for third-party payment gateway errors or issues.</p>
                <p>5.3. Cancellation and refund policies apply as per HiFive Cafe’s cancellation policy.</p>

                <h2>6. Privacy Policy</h2>
                <p>6.1. HiFive Cafe values your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>

                <h2>7. Links to Third-Party Websites</h2>
                <p>7.1. The website may contain links to third-party websites. HiFive Cafe is not responsible for the content, accuracy, or practices of these third-party sites.</p>

                <h2>8. Limitation of Liability</h2>
                <p>8.1. HiFive Cafe is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the website.</p>
                <p>8.2. HiFive Cafe does not guarantee the website will be free of errors, viruses, or interruptions.</p>

                <h2>9. Changes to the Terms and Conditions</h2>
                <p>9.1. HiFive Cafe reserves the right to update or modify these Terms and Conditions at any time without prior notice.</p>
                <p>9.2. Continued use of the website after changes are made constitutes acceptance of the revised terms.</p>

                <h2>10. Governing Law</h2>
                <p>10.1. These terms are governed by the laws of [Insert Jurisdiction]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [Insert Location].</p>

                <h2>11. Contact Information</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                <p>{process.env.REACT_APP_CAFE_NAME}</p>
                <p>{process.env.REACT_APP_ADDRESS}</p>
                <p>Phone: +91-{process.env.REACT_APP_CALL_NUMBER}</p>
                <p>Whatsapp: +91-{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
                <p>Email: {process.env.REACT_APP_CONTACT_EMAIL}</p>

                <p>This draft serves as a starting point. Please ensure it aligns with your business policies and consult a legal professional to comply with applicable laws and regulations.</p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
