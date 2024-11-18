import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../theme/css-component/home.css"
import Navbar from "./Navbar";
import Sidebar from './Sidebar'
// import logo from '../theme/image/logo.png'
// import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Slider from 'react-slick';
import vid1 from '../theme/video/vid1.webm'
import vid2 from '../theme/video/vid2.mp4'
import vid3 from '../theme/video/vid3.mp4'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { IconButton } from '@mui/material';



const Home = () => {

const backendURL = process.env.REACT_APP_API_URL;


    const video = [
        {
            id: 1,
            src: vid1
        }, {
            id: 2,
            src: vid2
        }, {
            id: 3,
            src: vid3
        }
    ]

    const [videoid, setVideoid] = useState(0);
    const nextvid = (i) => {

        if (i == 2 || i == 1 || i == 0) {
            setVideoid(i)
        } else {

            setVideoid(0)
        }

    }

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

            <div className='container-fluid ' >
                <div className='row' >
                    <div className='col-lg-12 home_full'>
                        <div className='nav_bar'>
                            <Navbar />
                        </div>


                        <div className='row home_row_1'>

                            <div className='col-lg-3 home_col_1 sidebar '>

                                <Sidebar />
                            </div>
                            <div className='col-lg-9  home_col_2'>
                                <ReactPlayer
                                    url={video[videoid].src}
                                    width='100vw'
                                    height='100vh'
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
                                            <div>
                                                <img src={`${backendURL}/images/1716996292060_90726623.jpeg`} style={{ width: '100%', height: '50vh' }} />
                                            </div>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>

                                        </Slider>

 
                                    </div>
                                    <div className='col-lg-6 home_col_3_2'>

                                        <h2>The long tradition</h2>
                                        <h1>CANDLE LIGHT DINNER</h1>
                                        <p>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</p>
                                        <button className='btn btn-primary home_btn'>BOOK NOW</button>

                                    </div>
                                </div>

                                {/* ======================== */}

                                <div className='row row2  w_row2'>

                                    <div className='col-lg-6 home_col_3_2'>

                                        <h2>The long tradition</h2>
                                        <h1>BIRTHDAY PARTY</h1>
                                        <p>Amuse your friends and family members with a surprising birthday party at an economical cost.</p>
                                        <button className='btn btn-primary home_btn'>BOOK NOW</button>

                                    </div>
                                    <div className='col-lg-6 home_col_3_1'>

                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>

                                        </Slider>


                                    </div>

                                </div>



                                <div className='row row2 m_row2'>



                                    <div className='col-lg-6 home_col_3_1'>

                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>

                                        </Slider>


                                    </div>

                                    <div className='col-lg-6 home_col_3_2'>

                                        <h2>The long tradition</h2>
                                        <h1>BIRTHDAY PARTY</h1>
                                        <p>Amuse your friends and family members with a surprising birthday party at an economical cost.</p>
                                        <button className='btn btn-primary home_btn'>BOOK NOW</button>

                                    </div>

                                </div>


                                {/* ============================== */}
                                <div className='row row2'>
                                    <div className='col-lg-6 home_col_3_1'>

                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>

                                        </Slider>


                                    </div>
                                    <div className='col-lg-6 home_col_3_2'>

                                        <h2>The long tradition</h2>
                                        <h1>Table Booking</h1>
                                        <p>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</p>
                                        <button className='btn btn-primary home_btn'>BOOK NOW</button>

                                    </div>
                                </div>


                                {/* ========================================================== */}

                                <div className='row row2  w_row2'>

                                    <div className='col-lg-6 home_col_4_2'>
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
                                            <a href="/cake_cat"><button className='btn btn-primary home_btn'>ALL CAKES</button></a>
                                        </div>

                                    </div>
                                    <div className='col-lg-6 home_col_4_1'>

                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>

                                        </Slider>


                                    </div>

                                </div>




                                <div className='row row2  m_row2'>

                                    <div className='col-lg-6 home_col_4_1'>

                                        <Slider {...settings} style={{ width: '90%' }}>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>
                                            <div>
                                                <img src="" style={{ width: '100%', height: '50vh' }} />
                                            </div>

                                        </Slider>


                                    </div>

                                    <div className='col-lg-6 home_col_4_2'>
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
                                            <button className='btn btn-primary home_btn'>ALL CAKES</button>
                                        </div>

                                    </div>


                                </div>



                            </div>

                        </div>



                        {/* ===================================================================================== */}


            

                    </div>
                </div>
            
            </div>




        </>
    )
}

export default Home
