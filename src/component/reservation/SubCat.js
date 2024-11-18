import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/sub_cat.css'
import Sidebar from '../Sidebar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';
import axios from 'axios'


import ReactPlayer from 'react-player'
import vid1 from '../../theme/video/vid1.webm'
import vid2 from '../../theme/video/vid2.mp4'
import vid3 from '../../theme/video/vid3.mp4'
import { Link } from 'react-router-dom';


const SubCat = () => {



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

    const res_id = localStorage.getItem('res_id');
    // =============================================catlist
    const [resCatList, setResCatList] = useState([])
    const [title, setTitle] = useState()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/website/reservation/category/list?reser_id=${res_id}`)
            .then((res) => {
                if (res.data.Response.Success == 1) {
                    console.log(res.data.Response?.result[0]);
                    console.log(res.data.Response?.result[0].reservation_category_list);
                    setTitle(res.data.Response?.result[0].reser_main_title)
                    setResCatList(res.data.Response?.result[0].reservation_category_list)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    const route_cat = (e) => {
        localStorage.setItem("res_cat_id", e)
    }

    return (
        <>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className='row sc_row2'>

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
                    <div className='col-lg-9 sub_cat_1'>
                        <h1>{title}</h1>
                    </div>
                    =</div>
                <div className='row'>
                    <div className='col-lg-3  sidebar ' >

                    </div>

                    <div className='col-lg-9 '>
                        <div className='row'>
                            {
                                resCatList?.map((item, i) => (
                                    <div className='col-lg-3 sub_cat_2' key={i}>
                                        <Link to="/sub_cat_list" onClick={() => route_cat(item.cat_id)}>
                                            <img className='img'
                                                src={item.cat_image} alt={`Image ${i}`} />
                                        </Link>
                                        <div style={{ marginTop: '4vh' }}>
                                            <h3>{item.cat_title}</h3>
                                        </div>
                                        <h4>{item.price_range}</h4>
                                    </div>
                                ))
                            }

                        </div>

                    </div>



                </div>




                {/* ===================================================================================== */}

            </div>

        </>
    )
}

export default SubCat
