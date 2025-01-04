import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../theme/css-component/home.css"
import Navbar from "./Navbar";
import Sidebar from './Sidebar'
// import logo from '../theme/image/logo.png'
// import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Slider from 'react-slick';

import vidWeb1 from '../theme/home/video/vidWeb1.mp4'
import vidWeb2 from '../theme/home/video/vidWeb2.MOV'
import vidWeb3 from '../theme/home/video/vidWeb3.MOV'

import vidMob1 from '../theme/home/video/vidMob1.mp4'
import vidMob2 from '../theme/home/video/vidMob2.mp4'
import vidMob3 from '../theme/home/video/vidMob1.mp4'

import LOGO from '../theme/image/logo.png'


import cl1 from '../theme/home/image/cl-1.jpeg'
import cl2 from '../theme/home/image/cl-2.jpeg'
import cl3 from '../theme/home/image/cl-3.jpeg'
// import cl4 from '../theme/home/image/cl-4.jpeg'
// import cl5 from '../theme/home/image/cl-5.jpeg'
// import cl6 from '../theme/home/image/cl-6.jpeg'
// import cl7 from '../theme/home/image/cl-7.jpeg'
// import cl8 from '../theme/home/image/cl-8.jpeg'
// import cl9 from '../theme/home/image/cl-9.jpeg'
// import cl10 from '../theme/home/image/cl-10.jpeg'

import bp1 from '../theme/home/image/bp-1.jpeg'
import bp2 from '../theme/home/image/bp-2.jpeg'
import bp3 from '../theme/home/image/bp-3.jpeg'
import bp4 from '../theme/home/image/bp-4.jpeg'
import bp5 from '../theme/home/image/bp-5.jpeg'
// import bp6 from '../theme/home/image/bp-6.jpeg'
// import bp7 from '../theme/home/image/bp-7.jpeg'
// import bp8 from '../theme/home/image/bp-8.jpeg'
// import bp9 from '../theme/home/image/bp-9.jpeg'
// import bp10 from '../theme/home/image/bp-10.jpeg'

import ck1 from '../theme/home/image/ck-1.jpeg'
import { Link } from 'react-router-dom';
// import ck2 from '../theme/home/image/ck-2.jpeg'
// import ck3 from '../theme/home/image/ck-3.jpeg'
// import ck4 from '../theme/home/image/ck-4.jpeg'
// import ck5 from '../theme/home/image/ck-5.jpeg'
// import ck6 from '../theme/home/image/ck-6.jpeg'
// import ck7 from '../theme/home/image/ck-7.jpeg'
// import ck8 from '../theme/home/image/ck-8.jpeg'
// import ck9 from '../theme/home/image/ck-9.jpeg'
// import ck10 from '../theme/home/image/ck-10.jpeg'

// import vid2 from '../theme/video/vid2.mp4'
// import vid3 from '../theme/video/vid3.mp4'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { IconButton } from '@mui/material';



const Home = () => {

    const backendURL = process.env.REACT_APP_API_URL;




    let video = [{ src: vidMob1 }, { src: vidMob2 }, { src: vidMob3 }]

    const device = localStorage.getItem('device');

    if (device != "mobile") {
        video = [{ src: vidWeb1 }, { src: vidWeb2 }, { src: vidWeb3 }]
    }

    console.log(device);

    const [videoid, setVideoid] = useState(0);
    const nextvid = (newVideoId) => {
        if (newVideoId < video.length) { // Prevent going beyond the available video list
            console.log("newVideoId", newVideoId)
            setVideoid(newVideoId);
        } else {
            console.log("newVideoId1", newVideoId)
            setVideoid(0);
        }
    };


    let veidoHeight = (device == "mobile") ? '80vh' : '100vh';

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <>

            <div className='container-fluid home-div' >
                <div className='row' >
                    <div className='col-lg-12 home_full'>
                        <div className='nav_bar'>
                            <Navbar />
                        </div>
                        <div className='row home_row_1'>
                            <div className='col-lg-3 home_col_1 sidebar '>
                                <Sidebar />
                            </div>
                            {/* <div className='col-lg-9 home_col_2 home_image_center' style={{ backgroundImage: LOGO }}> */}
                            <div className='col-lg-9 home_col_2 home_image_center'>
                                <ReactPlayer
                                    url={video[videoid].src}
                                    width='100vw'
                                    height={veidoHeight}
                                    pip={true}
                                    controls={false}
                                    playing={true}
                                    playbackRate={1}
                                    volume={0}
                                    onEnded={() => nextvid(videoid + 1)}
                                />

                            </div>
                        </div>

                        {/* ===================================================================================== */}

                        <div className='row home_row_2 ' >
                            <div className='col-lg-3 home_col_1 sidebar'>

                            </div>
                            <div className='col-lg-9 home_col_3'>

                                <div className='row '>

                                    <div className='col-lg-6 home_col_3_1'>
                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div><img src={cl1} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={cl2} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={cl3} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                        </Slider>
                                    </div>

                                    <div className='col-lg-6 home_col_3_2 '>
                                        <h2>The long tradition</h2>
                                        <h1>CANDLE LIGHT DINNER</h1>
                                        <p>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</p>
                                        <Link to="/reservation" className='btn btn-primary home_btn'>BOOK NOW</Link>
                                    </div>

                                </div>

                                {/* ======================== */}

                                <div className='row row2  w_row2'>

                                    <div className='col-lg-6 home_col_3_1 order-lg-2'>
                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div><img src={bp1} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp2} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp3} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp4} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp5} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                        </Slider>
                                    </div>

                                    <div className='col-lg-6 home_col_3_2 order-lg-1'>
                                        <h2>The long tradition</h2>
                                        <h1>BIRTHDAY PARTY</h1>
                                        <p>Amuse your friends and family members with a surprising birthday party at an economical cost.</p>
                                        <Link to="/reservation" className='btn btn-primary home_btn'>BOOK NOW</Link>
                                    </div>
                                </div>

                                <div className='row row2'>


                                    <div className='col-lg-6 home_col_3_1'>
                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div><img src={bp1} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp2} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp3} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp4} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={bp5} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                        </Slider>
                                    </div>

                                    <div className='col-lg-6 home_col_3_2'>
                                        <h2>The long tradition</h2>
                                        <h1>Table Booking</h1>
                                        <p>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</p>
                                        <Link to="/reservation" className='btn btn-primary home_btn'>BOOK NOW</Link>
                                    </div>

                                </div>


                                {/* ========================================================== */}

                                <div className='row row2  w_row2'>

                                    <div className='col-lg-6 home_col_4_1 order-lg-2'>
                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div><img src={ck1} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                            <div><img src={ck1} style={{ width: '100%', height: '70vh' }} className="responsive-image" /></div>
                                        </Slider>
                                    </div>
                                    <div className='col-lg-6 home_col_4_2 order-lg-1'>
                                        <div className='home_col_4_2_1'>
                                            <h2>Our choice</h2>
                                            <h1>CAKES</h1>
                                        </div>

                                        <div className='home_col_4_2_2'>
                                            <div>
                                                <p>BLUE DONOT CHOCO  TRUFFLE</p>
                                                <p>₹1260</p>
                                            </div>
                                            <div>
                                                <p>BLACK PANTHER</p>
                                                <p>₹1680</p>
                                            </div>
                                            <div>
                                                <p>BLUE MOUNTAIN</p>
                                                <p>₹1680</p>
                                            </div>
                                            <div>
                                                <p>PINK BLUE BUTTERFLY</p>
                                                <p>₹1417.5</p>
                                            </div>
                                        </div>
                                        <div className='home_col_4_2_3'>
                                            <a href="/cake_cat"><button className='btn btn-primary home_btn mob-mt-10'>ALL CAKES</button></a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
