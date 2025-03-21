import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/sub_cat.css'
import Sidebar from '../Sidebar';
import Status from './Status';
import axios from 'axios'
import { useParams } from 'react-router-dom';

import { Link, useLocation } from 'react-router-dom';

const SubCat = () => {

    const { res_id: paramResId } = useParams(); // Get IDs from URL

    const [res_id, setResId] = useState(localStorage.getItem("res_id") || paramResId);

    const res_code = localStorage.getItem('res_code');
    // =============================================catlist
    const [resCatList, setResCatList] = useState([])
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [main_title, setMain_title] = useState()

    const location = useLocation();
    console.log(location.state)
    const { status } = location.state || { status: { msg: "", type: "success", toggle: "close" } }; // Access the passed data
    console.log(status)

    // status
    const empStatus = { msg: "", type: "success", toggle: "close" }
    const [status1, setStatus1] = useState(empStatus);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/website/reservation/category/list?reser_id=${res_id}`)
            .then((res) => {
                if (res.data.Response.Success == 1) {
                    console.log(res.data.Response?.result[0]);
                    console.log(res.data.Response?.result[0].reservation_category_list);
                    setMain_title(res.data.Response?.result[0].reser_main_title)
                    setTitle(res.data.Response?.result[0].reser_title)
                    setDescription(res.data.Response?.result[0].description)
                    setResCatList(res.data.Response?.result[0].reservation_category_list)
                } else {
                    setStatus1({ msg: "No Records Found", type: "error", toggle: "open" })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        if (status && status != null) {
            setStatus1(status);
        }
    }, [])

    const route_cat = (e) => {
        localStorage.removeItem('res_cat_id')
        localStorage.setItem("res_cat_id", e)
    }

    const route_code = (v) => {
        localStorage.removeItem('res_cat_code')
        localStorage.setItem("res_cat_code", v)
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
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row nav_bar'>
                            <Navbar />
                        </div>

                        <div className='row'>
                            <div className='col-lg-3 sidebar'>
                                <Sidebar openSidebar='hide' />
                            </div>
                            <div className='col-lg-9 sub_cat_1 mob-mt-20'>
                                <Status msg={status1.msg} type={status1.type} toggle={status1.toggle} onClose={() => setStatus1(empStatus)} />
                                <h1>{main_title}</h1>
                                <h3>{title}</h3>
                                <h5>{description}</h5>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-9'>
                                <div className='row ms-1'>
                                    <div style={{ display: "contents" }}>
                                        <div><Link to="/reservation" className='breadcrums'>Reservation</Link></div>
                                        <div className='grey'>&nbsp;-&nbsp;</div>
                                        <div className='breadcrums-active'> {main_title}</div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    {
                                        resCatList?.map((item, i) => (
                                            <div className='col-lg-4 mb-4 sub_cat_2' key={i}>
                                                <Link to={`/sub_cat_list/${res_id}/${item.cat_id}`}
                                                    onClick={() => { route_cat(item.cat_id); route_code(item.reser_cat_code) }}>
                                                    <img className='img' src={item.cat_image} alt={`Image ${i}`} />
                                                </Link>
                                                <h3 className='text-center orange' style={{ marginTop: '2vh' }}>{item.cat_title}</h3>
                                                <h4 className='text-center green'>{item.price_range}</h4>
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

export default SubCat
