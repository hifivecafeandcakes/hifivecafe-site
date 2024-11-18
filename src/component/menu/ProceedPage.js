import React from 'react'
import Navbar from "../Navbar";
import "../../theme/css-component/proceed_page.css"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import HailIcon from '@mui/icons-material/Hail';

const ProceedPage = () => {
    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <Navbar />
                </div>
                <div className='row pp'>
                    <div className='col-lg-9 pp1'>
                        <div className='pp1-1'>
                            <div className='pp1-1-1'>
                                <p>Select delivery address</p>
                            </div>
                            <div className='pp1-1-2'>
                                <div className='pp1-1-2-1'>
                                    <div className='pp11'>
                                        <FmdGoodIcon />
                                    </div>
                                    <div className='p12'>
                                        <h6>delivery Address</h6>
                                        <p>house, 6/5, Covai Pudur Rd, Vivekanandapuram, Madukkarai, Coimbatore, Kovaipudur, Tamil Nadu 641105, India</p>
                                        <button className='btn btn-primary'>DELIVERY HERE</button>
                                    </div>

                                </div>
                                <div className='pp1-1-2-1'>
                                    <div className='pp11'>
                                        <HailIcon />
                                    </div>
                                    <div>
                                        <div className='p-3'>
                                            <h6 style={{fontSize:'larger',fontWeight:'bolder'}}>Pick-up Date</h6>
                                            <input style={{  width: '100%', padding: '5%' }} type="date" className="form-control" />
                                        </div>
                                        <div className='p-3'>
                                            <h6 style={{fontSize:'larger',fontWeight:'bolder'}}>Pick-up Time</h6>
                                            <input style={{  width: '100%', padding: '5%' }} type="time" className="form-control" />
                                        </div>
                                        <button className='btn btn-primary ms-3'>CHECK OUT</button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='col-lg-4 pp2'>

                        <div className='pp2-1'>


                        </div>

                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProceedPage
