import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/sub_cat.css'
import Sidebar from '../Sidebar';
import axios from 'axios'

import { Link } from 'react-router-dom';

const SubCatList = () => {

    const res_cat_id = localStorage.getItem('res_cat_id');
    const res_id = localStorage.getItem('res_id');
    const res_code = localStorage.getItem('res_code');
    const res_cat_code = localStorage.getItem('res_cat_code');


    let RedirectURL = '/clt_cart';
    if (res_code == "CL") {
        RedirectURL = '/clt_cart';
    }
    else if (res_code == "BP") {
        RedirectURL = '/btb_cart';
    }
    else {
        RedirectURL = '/tb_cart';
    }

    // ==========================

    const [res_scat_list, setRes_scat_list] = useState([])
    const [title, setTitle] = useState()
    const [sub_title, setSub_title] = useState()

    const device = localStorage.getItem('device');

    console.log(device);

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
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className='container-fluid subcat-list-div' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row mt-4'>
                            <div className='col-lg-3 sidebar'>
                                <Sidebar />
                            </div>
                            <div className='col-lg-9  mob-mt-40'>
                                <div><h3 className='text-center'>{title}</h3></div>
                                <div><h1 className='text-center'>{sub_title}</h1></div>
                            </div>
                        </div>

                        <div className='row mt-4'>
                            <div className='col-sm-3' ></div>
                            <div className='col-sm-9'>
                                <div className='row'>
                                    {
                                        res_scat_list?.map((item, i) => (
                                            <div className='col-lg-4  mb-4 sub_cat_2' key={i}>
                                                <Link onClick={() => route_cat(item.reser_sub_id)}
                                                    to={RedirectURL}>
                                                    <img className='img' src={item.sub_img} alt={`Image ${i}`} /> </Link>
                                                <h3 className='text-center orange' style={{ marginTop: '2vh' }}>{item.sub_tilte}</h3>
                                                <h4 className='text-center green'>{item.sub_cat_price_range}</h4>
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
