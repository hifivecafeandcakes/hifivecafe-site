
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';

const Footer = () => {
    return (
        <>
            <div className='row  home_col3_3'>
                <div className='col-lg-4  home_col3_1 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 >Wedding Event Hall</h1>
                        <h1 >Candle Light Dinner</h1>
                        <h1>Book Team Lunch</h1>
                        <h1>Quick Cake Delivery</h1>
                        <h1>Birthday Cakes</h1>
                    </div>
                </div>
                <div className='col-lg-4  home_col1_3 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p>Find Us</p>
                        <h1 >Hifive Cafe and Cakes, 3, Sathy Rd,
                            Ramanandha Nagar, Saravanampatti, Coimbatore</h1>
                        <h1>+91 99408 88633,<br /> contact@hifivecafe.com</h1>
                        <h1>Open: 11:00 am – 10:00 pm</h1>
                        <div>
                            <IconButton style={{ color: 'orange' }}>
                                <InstagramIcon />
                            </IconButton>

                            <IconButton style={{ color: 'orange' }}>
                                <FacebookIcon />
                            </IconButton><IconButton style={{ color: 'orange' }}>
                                <XIcon />
                            </IconButton>

                        </div>

                    </div>


                </div>
                <div className='col-lg-4  home_col3_1 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeeda' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 >Privacy Policy</h1>
                        <h1 >Terms & Conditions</h1>
                        <h1>Refund Policy</h1>
                        <h1>Shipping Policy</h1>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
