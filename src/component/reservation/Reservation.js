import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/reservation.css'
import Sidebar from '../Sidebar';
import ReactPlayer from 'react-player'
// import Slider from 'react-slick';
import vid1 from '../../theme/video/vid1.webm'
import vid2 from '../../theme/video/vid2.mp4'
import vid3 from '../../theme/video/vid3.mp4'
import BgGrey from '../../theme/image/site/bg-grey.jpg'

// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { IconButton } from '@mui/material';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Reservation = () => {


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

        if (i === 2 || i === 1 || i === 0) {
            setVideoid(i)
        } else {
            setVideoid(0)
        }

    }





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


    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row home_row_1'>
                            <div className='col-lg-3 home_col_1 sidebar ' >

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

                        <div className='row home_row2 ' >
                            <div className='col-lg-3  sidebar ' >
                                <Sidebar />
                            </div>


                            {res_list?.map((item, index) => (
                                <div className='col-lg-3  home_row2_1 '>

                                    <h1 className=' d-lg-none'>RESERVATION</h1>
                                    <div style={{ display: 'flex' }}>

                                        <img className='img1' alt="img" src={BgGrey} />

                                        <img className='img2' alt="img" src={item.reser_image} style={{ position: 'absolute' }} />

                                    </div>
                                    <h4>{item.reser_main_title}</h4>
                                    <h4>{item.reser_title}</h4>
                                    {/* <button style={{ textAlign: 'center' }} className='home_action2_btn ' onClick={() => route_cat(res_list[0]?.reser_id)}>BOOK NOW</button> */}
                                    <Link to="/sub_cat" style={{ textAlign: 'center' }} className='home_action2_btn '
                                        onClick={() => route_cat(item.reser_id)}>BOOK NOW</Link>

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
