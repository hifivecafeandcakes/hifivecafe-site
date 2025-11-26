import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/CLT_cart.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Status from './Status';
import { Link, useNavigate } from "react-router-dom";
import CustomSlider from './CustomSlider';
import CustomSubSlider from './CustomSubSlider';
import Footer from './Footer';
import validator from '../validate.ts';

import { useParams } from "react-router-dom";


const TbCart = () => {
    const user_id = localStorage.getItem("user_id")
    const { res_id: paramResId, res_cat_id: paramResCatId, res_scat_id: paramResScatId } = useParams(); // Get IDs from URL

    // State to store final values (from params or localStorage)
    const [res_id, setResId] = useState(localStorage.getItem("res_id") || paramResId);
    const [res_cat_id, setResCatId] = useState(localStorage.getItem("res_cat_id") || paramResCatId);
    const [res_scat_id, setResScatId] = useState(localStorage.getItem("res_scat_id") || paramResScatId);

    const res_code = localStorage.getItem('res_code');
    const res_cat_code = localStorage.getItem('res_cat_code');


    const [isUpdated, setIsUpdated] = useState(false);

    const navigate = useNavigate();
    // console.log(user_id);
    useEffect(() => {
        if (!user_id) {
            navigate("/login")
        } else {
            fetchData();
        }
    }, []);

    //fetching parameters
    const [subcatres, setSubcatres] = useState(''); //actual fetching subcat data
    const [mainImages, setMainImages] = useState([]); //actual data
    const [menuImages, setMenuImages] = useState([]); //actual data

    // form parameter
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [comment, setComment] = useState('');

    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState(0);

    const [guestName, setGuestName] = useState('');
    const [guestWhatsapp, setGuestWhatsapp] = useState('');
    const [guestNameError, setGuestNameError] = useState(false);
    const [hasPhoneError, setHasPhoneError] = useState(false);

    //Error
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);

    // status
    const empStatus = { msg: "", type: "success", toggle: "close" }
    const [status, setStatus] = useState(empStatus);


    // Slick
    const [refreshKey, setRefreshKey] = useState(0);
    const [slicksetting, setSlicksetting] = useState("");

    // useEffect(() => {

    //     setMenuImages(menuImages);
    // }, [menuImages]);


    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/website/reservation/category/subcategory?res_id=${res_id}&res_cat_id=${res_cat_id}&reser_sub_id=${res_scat_id}&user_id=${user_id}`)
            if (res.data.Response.Success == 1) {
                console.log(res.data.Response.result);
                let reservation_subcategory = res.data.Response.result[0].reservation_subcategory;
                console.log("RES :", reservation_subcategory);
                if (reservation_subcategory.length > 0) {
                    setSubcatres(reservation_subcategory[0]);
                    var arrr = [];
                    if (reservation_subcategory[0].sub_extra_img.length > 0) {
                        var arr_sub_extra_img = reservation_subcategory[0].sub_extra_img;
                        arr_sub_extra_img.map((item, i) => {
                            arrr.push(item)
                        })
                        setRefreshKey(prevKey => prevKey + 1);
                    }
                    if (reservation_subcategory[0].sub_img) {
                        var arr_img = reservation_subcategory[0].sub_img;
                        arrr.push(arr_img)
                        setRefreshKey(prevKey => prevKey + 1);
                    }
                    setMainImages([...arrr]);

                    setTotal(parseFloat(reservation_subcategory[0].sub_cat_price_range))
                    setPrice(parseFloat(reservation_subcategory[0].sub_cat_price_range))
                }
                else {
                    console.log("No data found.");
                }
            }
            else {
                console.log("No data found.");
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    function changeWhatsapp(v) {
        console.log(validator.indianPhoneNo(v));
        (validator.indianPhoneNo(v)) ? setHasPhoneError(true) : setHasPhoneError(false); setGuestWhatsapp(v);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('userid', user_id);

        (date == "") ? setDateError(true) : setDateError(false);
        (time == "") ? setTimeError(true) : setTimeError(false);
        console.log('dateError', dateError);
        console.log('timeError', timeError);

        if (time == "" || date == "") {
            setStatus({ msg: "Please fill all required (*) fields", type: "error", toggle: "open" })
            return;
        }

        (guestName == "") ? setGuestNameError(true) : setGuestNameError(false);
        if (guestWhatsapp != "" && (validator.indianPhoneNo(guestWhatsapp))) {
            setHasPhoneError(true)
            return;
        }

        let selected = new Date(date);
        selected = selected.toISOString().split('T')[0];
        let today = new Date();
        today = today.toISOString().split('T')[0];

        if (selected < today) {
            setStatus({ msg: "Please select a future date.", type: "error", toggle: "open" })
            return;
        }

        let now = new Date();
        let currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        // Check if selected time is in the future
        if ((time <= currentTime) && selected <= today) {
            setStatus({ msg: "Please select a future time.", type: "error", toggle: "open" })
            return;
        }

        const formData = new FormData();
        formData.append('userid', user_id);
        formData.append('reser_id', res_id);
        formData.append('reser_catid', res_cat_id);
        formData.append('resersubcatid', res_scat_id);
        formData.append('type', res_code);
        formData.append("guest_name", guestName);
        formData.append("guest_whatsapp", guestWhatsapp);

        formData.append("date", date);
        formData.append("time", time);
        formData.append("peoples", numOfPeople);
        formData.append("remarks", comment);

        formData.append("total", total);
        formData.append("price", price);

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/reservation/booking/create`, formData)
            console.log("RESPONSE :", res.data);
            if (res?.data?.Response?.Success == '1') {
                setStatus({ msg: "Booked Successfully!", type: "success", toggle: "open" });
                navigate('/order', { state: { status: status } });
            } else if (res.data.message == 'Give Valid Id') {
                setStatus({ msg: "Give Valid Id", type: "error", toggle: "open" })
                console.log('Give Valid Id');
            } else {
                setStatus({ msg: "Error in Booking. Try Again", type: "error", toggle: "open" })
                console.log('Execution Error');
            }
        } catch (err) {
            setStatus({ msg: "Error in Booking. Try Again", type: "error", toggle: "open" })
            console.log('Fetching Error:', err);
        }
    }

    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const todayFormatted = today.toISOString().split('T')[0];
        setMinDate(todayFormatted);
    }, []);

    const [minTime, setMinTime] = useState('');

    useEffect(() => {
        // Get the current time
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const currentTime = `${hours}:${minutes}`;

        setMinTime(currentTime);
    }, []);



    return (
        <>
            <div className='container-fluid '>
                <div className='row' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <Navbar />
                        </div>
                        <div className='row CLT_cart_row1 mob-mt-90'>

                            <div className='col-lg-12'>
                                <h6 className='text-center'
                                    style={{ color: 'orange', fontFamily: '"Bebas Neue", sans-serif' }}>
                                    {subcatres.reser_main_title}
                                    {/* <h6 className='text-center'>
                                        {subcatres.reser_title}
                                    </h6> */}
                                    &nbsp;-&nbsp;<span className='text-center'
                                        style={{ color: 'orange', fontFamily: '"Bebas Neue", sans-serif' }}>
                                        {subcatres.cat_title}</span>
                                </h6>
                                <h5 className='text-center'
                                    style={{ color: 'orangered', fontFamily: '"Bebas Neue", sans-serif' }}>
                                    {subcatres.sub_tilte}
                                </h5>
                            </div>
                        </div>
                        <div className='row BTB_cart_row12'>
                            <div className='col-lg-12'>
                                <h2>
                                    {subcatres.description}
                                </h2>
                            </div>
                        </div>

                        <div className='row mb-2 ms-1'>
                            <div style={{ display: "contents" }}>
                                <div><Link to="/reservation" className='breadcrums'>Reservation</Link></div>
                                <div className='grey'>&nbsp;-&nbsp;</div>
                                <div><Link to={`/sub_cat/${res_id}`} className='breadcrums'>{subcatres.reser_main_title}</Link></div>
                                <div className='grey'>&nbsp;-&nbsp;</div>
                                <div><Link to={`/sub_cat_list/${res_id}/${res_cat_id}`} className='breadcrums'>{subcatres.cat_title}</Link></div>
                                <div className='grey'>&nbsp;-&nbsp;</div>
                                <div className='breadcrums-active'> {subcatres.sub_tilte}</div>
                            </div>
                        </div>

                        <div className='row CLT_cart_row2'>

                            <div className='col-lg-4 CLT_cart_row2_1 customsubslide'>
                                {/* <img style={{ border: '1px solid orange', borderRadius: '10%' }}
                                    src={subcatres.sub_img} alt="res sub cat image" /> */}


                                {(refreshKey != 0 && mainImages.length > 0) ?
                                    // <MenuSlider menuImages={menuImages} />
                                    <CustomSubSlider images={mainImages} />
                                    : ""}
                                <h3 className='orange text-center'>CODE : {subcatres.sub_tilte}</h3>
                                <h2 className='white text-center'>{subcatres.sub_cat_des}</h2>
                                <h2 className='green text-center'>₹{price}</h2>
                            </div>
                            <div className="col-lg-6 ">
                                <div className='CLT_cart_row2_2_div'>
                                    <Status msg={status.msg} type={status.type} toggle={status.toggle} onClose={() => setStatus(empStatus)} />
                                    <div className="row p-2">
                                        <div className='col-lg-6'>
                                            <label className='required'>Date <span className='green'>*</span></label>
                                            <input type="date" min={minDate} className="required form-control p-2" onChange={(e) => { setDateError(false); setDate(e.target.value) }} />
                                            {(dateError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                        <div className='col-lg-6'>
                                            <label className='required'>Time <span className='green'>*</span></label>
                                            <input type="time" min={minTime} className="form-control p-2" onChange={(e) => { setTimeError(false); setTime(e.target.value) }} />
                                            {(timeError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                    </div>

                                    <div className="row p-2">
                                        <div className='col-sm'>
                                            <label className='required'>Your Name</label>
                                            <input type="text" maxLength={30} className="form-control p-2" required onChange={(e) => { setGuestNameError(false); setGuestName(e.target.value); }} />
                                            {(guestNameError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                        <div className='col-sm'>
                                            <label className=''>Whatsapp No</label>
                                            <input type="number" className="form-control p-2" onChange={(e) => { changeWhatsapp(e.target.value) }} />
                                            {(hasPhoneError) ? <span className='error'>Wrong Phone no format</span> : ""}
                                        </div>
                                        <div className='col-md-2'>
                                            <label className='required'>No. of People</label>
                                            <select className="form-control p-2" onChange={(e) => setNumOfPeople(e.target.value)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='p-2'>
                                        <label>Additional Comments</label>
                                        <input type="text" maxLength={200} className="form-control p-2" onChange={(e) => setComment(e.target.value)} />
                                    </div>

                                    <div className='p-2' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "30px" }}>
                                        <button type='button' className='btn home_action2_btn' onClick={handleSubmit} >Book NOW</button>
                                    </div>
                                </div>
                            </div>


                            {/* =================================== */}


                        </div>
                        {/* ===================================================================================== */}
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    )
}

export default TbCart
