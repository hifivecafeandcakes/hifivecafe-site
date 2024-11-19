import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/sub_cat_list.css'
import Sidebar from '../Sidebar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import axios from 'axios';



import ReactPlayer from 'react-player'
import vid1 from '../../theme/video/vid1.webm'
import vid2 from '../../theme/video/vid2.mp4'
import vid3 from '../../theme/video/vid3.mp4'
import { Link } from 'react-router-dom';

const SubCatList = () => {


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



    // -------------------------------------------------------------------


    const res_cat_id = localStorage.getItem('res_cat_id');
    const res_id = localStorage.getItem('res_id');

    let RedirectURL = '/clt_cart';
    if (res_id == 2) {
        RedirectURL = '/btb_cart';
    }else{
        RedirectURL = '/tb_cart';
    }

    // ==========================

    const [res_scat_list, setRes_scat_list] = useState([])
    const [title, setTitle] = useState()
    const [sub_title, setSub_title] = useState()

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/website/reservation/subcategory/list?reser_id=${res_id}&resercat_id=${res_cat_id}`)
            .then((res) => {

                if (res.data.Response.Success == 1) {
                    setSub_title(res.data.Response?.result[0].reser_subtitle);
                    setTitle(res.data.Response?.result[0].reser_main_title)
                    setRes_scat_list(res.data.Response?.result[0].reservation_subcategory_list)

                }

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    // =========================================


    const route_cat = (e) => {
        localStorage.setItem("res_id", res_id);
        localStorage.setItem("res_cat_id", res_cat_id);
        localStorage.setItem("res_scat_id", e);


        console.log("res_id", res_id);
        console.log("res_cat_id", res_cat_id);
        console.log("res_scat_id", e);

        // if (res_id == '1') {
        //     window.location.href = "clt_cart";
        // }

        // if (res_id == '2') {
        //     window.location.href = "btb_cart";
        // }

        // if (res_id == '3') {
        //     window.location.href = "tb_cart";
        // }
    }

    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row'>
                            <div className='col-lg-3  sidebar ' >
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


                            <div className='col-lg-9  sub_cat_list_1'>
                                <h1 className='text-center' style={{ color: 'orange' }}>{title} ({sub_title})</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3  sidebar ' >

                            </div>
                            <div className='col-lg-9 '>
                                <div className='row'>
                                    {
                                        res_scat_list?.map((item, i) => (
                                            <div className='col-lg-3 sub_cat_list_2 ' key={i}>

                                                <Link onClick={() => route_cat(item.reser_sub_id)} to={RedirectURL}><img src={item.sub_img} alt={`Image ${i}`} /> </Link>


                                                <div>
                                                    <h5>{item.sub_tilte}</h5>
                                                    <h5>{item.sub_cat_price_range}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>



                        </div>

                    </div>
                </div>


                {/* ===================================================================================== */}





            </div>

        </>
    )
}

export default SubCatList





// <div className='col-lg-4 deccol'>
// <div className='cont'>
//     <div className='card'>
//         <div className='front'>
//             <img src="" />

//         </div>
//         <div className='back'>
//             <h5>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</h5>

//             <a href="/btb_cart"><button >BOOK NOW</button></a>

//         </div>
//     </div>
// </div>
// </div>
// <div className='col-lg-4 deccol'>
// <div className='cont'>
//     <div className='card'>
//         <div className='front'>
//             <img src="" />

//         </div>
//         <div className='back'>
//             <h5>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</h5>

//             <a href="/CLT_cart"><button >BOOK NOW</button></a>

//         </div>
//     </div>
// </div>
// </div>
// <div className='col-lg-4 deccol'>
// <div className='cont'>
//     <div className='card'>
//         <div className='front'>
//             <img src="" />

//         </div>
//         <div className='back'>
//             <h5>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</h5>

//             <a href="/tb_cart"><button >BOOK NOW</button></a>

//         </div>
//     </div>
// </div>
// </div>
// <div className='col-lg-4 deccol'>
// <div className='cont'>
//     <div className='card'>
//         <div className='front'>
//             <img src="" />

//         </div>
//         <div className='back'>
//             <h5>Enrich the romantic mood and share the joy with candle lights surrounded by lovely elements.</h5>

//             <a href="/CLT_cart"><button >BOOK NOW</button></a>

//         </div>
//     </div>
// </div>
// </div>
