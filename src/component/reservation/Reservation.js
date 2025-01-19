import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/reservation.css'
import Sidebar from '../Sidebar';
// import vid1 from '../../theme/video/vid1.webm'
// import vid2 from '../../theme/video/vid2.mp4'
// import vid3 from '../../theme/video/vid3.mp4'
import BgGrey from '../../theme/image/site/bg-grey.jpg'


import reservationMob1 from '../../theme/image/reservation/res-mob1.png'
import reservationMob2 from '../../theme/image/reservation/res-mob2.png'
import reservationMob3 from '../../theme/image/reservation/res-mob3.png'
import reservationMob4 from '../../theme/image/reservation/res-mob4.png'
import reservationWeb1 from '../../theme/image/reservation/res-web1.png'
import reservationWeb2 from '../../theme/image/reservation/res-web2.png'
import reservationWeb3 from '../../theme/image/reservation/res-web3.png'
import reservationWeb4 from '../../theme/image/reservation/res-web4.png'

// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { IconButton } from '@mui/material';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


const Reservation = () => {

    // =======================================res_list
    const [res_list, setRes_list] = useState([])
    console.log(res_list);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/website/reservation/list`)
            .then((res) => {
                console.log(res.data.Response?.result);
                let ress = res.data.Response?.result;
                let ress1 = ress.slice(0, 3);
                setRes_list(ress1)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    // // ===============================
    const route_cat = (e) => {
        localStorage.removeItem('res_id')
        localStorage.setItem("res_id", e)
    }

    const route_code = (v) => {
        localStorage.removeItem('res_code')
        localStorage.setItem("res_code", v)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    const device = localStorage.getItem('device');

    console.log(device);

    return (
        <>
            <div className='container-fluid  reservation-div' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row home_row_1'>
                            <div className='col-lg-3 home_col_1 sidebar ' >
                                <Sidebar />
                            </div>
                            <div className='col-lg-9 home_col_2'>

                                <Slider {...settings} style={{ width: '90%' }}>
                                    <div><img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob1 : reservationWeb1} ></img></div>
                                    <div><img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob2 : reservationWeb2} ></img></div>
                                    <div><img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob3 : reservationWeb3} ></img></div>
                                    <div><img style={{ width: '100%', height: '90vh' }} className="responsive-image" src={(device == 'mobile') ? reservationMob4 : reservationWeb4} ></img></div>
                                </Slider>

                            </div>
                        </div>

                        <div className='row mob-mt-20 '>
                            <div className='col-lg-3' >
                            </div>
                            <div className='col-lg-9'>
                                <h1 className='text-center orange'>RESERVATION</h1>
                            </div>
                        </div>

                        <div className='row home_row2'>
                            <div className='col-lg-3' >
                            </div>
                            {res_list?.map((item, index) => (
                                <div className='col-lg-3 home_row2_1 mob-mt-20'>
                                    <img className='img2' alt="img" src={item.reser_image} />
                                    <h4 className='pt-2'>{item.reser_main_title}</h4>
                                    <h5>{item.reser_title}</h5>
                                    {/* <button style={{ textAlign: 'center' }} className='home_action2_btn ' onClick={() => route_cat(res_list[0]?.reser_id)}>BOOK NOW</button> */}
                                    <Link to="/sub_cat" style={{ textAlign: 'center' }} className='home_action2_btn '
                                        onClick={() => { route_cat(item.reser_id); route_code(item.reser_code) }}>BOOK NOW</Link>

                                </div>
                            ))}

                        </div>



                        {/* ===================================================================================== */}


                    </div>

                </div>
            </div>

        </>
    )
}

export default Reservation
