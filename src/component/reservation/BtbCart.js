import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import TextField from '@mui/material/TextField';
import '../../theme/css-component/BTB_cart.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";
import { cakesArr, photoShootsArr, photoShootPricesArr, photoPrintsArr, photoPrintPricesArr, flowersArr, flowersPricesArr, cakeWeightArr, cakeShapeArr } from '../common/Constant';
import CustomSlider from './CustomSlider';
import CustomSubSlider from './CustomSubSlider';

import vid1 from '../../theme/video/vid1.webm'
import vid2 from '../../theme/video/vid2.mp4'
import vid3 from '../../theme/video/vid3.mp4'
import Status from './Status';
import Footer from './Footer';



const BtbCart = () => {

    const user_id = localStorage.getItem("user_id")
    const res_id = localStorage.getItem('res_id');
    const res_cat_id = localStorage.getItem('res_cat_id');
    const res_scat_id = localStorage.getItem('res_scat_id');

    const navigate = useNavigate();
    // console.log(user_id);
    useEffect(() => {
        if (!user_id) {
            navigate("/login")
        } else {
            fetchData();
        }
    }, []);

    const [subcatres, setSubcatres] = useState(''); //actual fetching subcat data
    const [mainImages, setMainImages] = useState([]); //actual data


    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guestName, setGuestName] = useState('');
    const [numOfPeople, setNumOfPeople] = useState(1);

    const [cake, setCake] = useState('');
    const [cakeWeight, setCakeWeight] = useState('');
    const [cakeShape, setCakeShape] = useState('');
    const [cakes, setCakes] = useState([]);
    const [cakeMsg, setCakeMsg] = useState('');
    const [comment, setComment] = useState('');

    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState(0);


    const [photoShoot, setPhotoShoot] = useState('');
    const [photoShoots, setPhotoShoots] = useState([]);
    const [photoShootPrice, setPhotoShootPrice] = useState(0);
    const [photoShootPrices, setPhotoShootPrices] = useState([]);

    const [photoPrint, setPhotoPrint] = useState('');
    const [photoPrints, setPhotoPrints] = useState([]);
    const [photoPrintPrice, setPhotoPrintPrice] = useState(0);
    const [photoPrintPrices, setPhotoPrintPrices] = useState([]);

    const [flower, setFlower] = useState('');
    const [flowers, setFlowers] = useState([]);
    const [flowerPrice, setFlowerPrice] = useState(0);
    const [flowersPrices, setFlowersPrices] = useState([]);


    //Error
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const [guestNameError, setGuestNameError] = useState(false);

    const [cakeMsgError, setCakeMsgError] = useState(false);
    const [cakeError, setCakeError] = useState(false);
    const [cakeWeightError, setCakeWeightError] = useState(false);
    const [cakeShapeError, setCakeShapeError] = useState(false);

    // status
    const empStatus = { msg: "", type: "success", toggle: "close" }
    const [status, setStatus] = useState(empStatus);


    // Slick
    const [refreshKey, setRefreshKey] = useState(0);


    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/website/reservation/category/subcategory?res_id=${res_id}&res_cat_id=${res_cat_id}&reser_sub_id=${res_scat_id}`)
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
                    var arr_cakes = (reservation_subcategory[0].cakes.length > 0) ? reservation_subcategory[0].cakes : cakesArr;

                    var arr_photoShoots = (reservation_subcategory[0].photoShoots.length > 0) ? reservation_subcategory[0].photoShoots : photoShootsArr;
                    var arr_photoShootPrices = (reservation_subcategory[0].photoShootPrices.length > 0) ? reservation_subcategory[0].photoShootPrices : photoShootPricesArr;
                    var arr_photoPrints = (reservation_subcategory[0].photoPrints.length > 0) ? reservation_subcategory[0].photoPrints : photoPrintsArr;
                    var arr_photoPrintPrices = (reservation_subcategory[0].photoPrintPrices.length > 0) ? reservation_subcategory[0].photoPrintPrices : photoPrintPricesArr;
                    var arr_flowers = (reservation_subcategory[0].flowers.length > 0) ? reservation_subcategory[0].flowers : flowersArr;
                    var arr_flowersPrices = (reservation_subcategory[0].flowersPrices.length > 0) ? reservation_subcategory[0].flowersPrices : flowersPricesArr;

                    setCakes([...arr_cakes]);
                    setPhotoShoots([...arr_photoShoots]);
                    setPhotoShootPrices([...arr_photoShootPrices]);
                    setPhotoPrints([...arr_photoPrints]);
                    setPhotoPrintPrices([...arr_photoPrintPrices]);
                    setFlowers([...arr_flowers]);
                    setFlowersPrices([...arr_flowersPrices]);


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



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('userid', user_id);

        (date == "") ? setDateError(true) : setDateError(false);
        (time == "") ? setTimeError(true) : setTimeError(false);
        (guestName == "") ? setGuestNameError(true) : setGuestNameError(false);

        (cake == "") ? setCakeError(true) : setCakeError(false);
        (cakeMsg == "") ? setCakeMsgError(true) : setCakeMsgError(false);
        (cakeWeight == "") ? setCakeWeightError(true) : setCakeWeightError(false);
        (cakeShape == "") ? setCakeShapeError(true) : setCakeShapeError(false);

        console.log('guestNameError', guestNameError);
        console.log('dateError', dateError);
        console.log('timeError', timeError);

        if (guestName == "" || time == "" || date == "") {
            setStatus({ msg: "Please fill all required (*) fields", type: "error", toggle: "open" })
            return;
        }

        if (cake == "" || cakeMsg == "" || cakeWeight == "" || cakeShape=="") {
            setStatus({ msg: "Please fill Cake's required (*) fields", type: "error", toggle: "open" })
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
        formData.append('type', "BP");

        formData.append("date", date);
        formData.append("time", time);
        formData.append("peoples", numOfPeople);
        formData.append("guest_name", guestName);
        formData.append("cake", cake);
        formData.append("cake_msg", cakeMsg);
        formData.append("cake_weight", cakeWeight);
        formData.append("cake_shape", cakeShape);
        formData.append("remarks", comment);

        formData.append("photoShoot", photoShoot);
        formData.append("photoShootPrice", photoShootPrice);
        formData.append("photoPrint", photoPrint);
        formData.append("photoPrintPrice", photoPrintPrice);
        formData.append("flower", flower);
        formData.append("flowerPrice", flowerPrice);
        formData.append("total", total);
        formData.append("price", price);


        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/reservation/booking/create`, formData)
            console.log("RESPONSE :", res.data);
            if (res?.data?.Response?.Success == '1') {
                let results = res?.data?.Response?.RazorpayOrder;
                results.booking_id = res?.data?.Response?.ReservationId;
                results.user = res?.data?.Response?.user[0];
                results.reservationSubCategory = res?.data?.Response?.reservationSubCategory[0];
                setStatus({ msg: "Booked Successfully!", type: "success", toggle: "open" });
                navigate('/checkout', { state: results });
                // window.location.href = '/reservation';
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

    console.log(photoShoots);


    const handlePhotoShoots = (event, index) => {
        console.log(index);
        const { value, checked } = event.target;
        if (checked) {
            setPhotoShoot(value);
            setPhotoShootPrice(() => {
                const updatedTotal = photoShootPrices[index];
                setTotal(parseFloat(price) + parseFloat(updatedTotal) + parseFloat(photoPrintPrice) + parseFloat(flowerPrice))
                return updatedTotal;
            });
        } else {
            setPhotoShoot("");
            setPhotoShootPrice(() => {
                setTotal(parseFloat(total) - parseFloat(photoShootPrice))
                return 0;
            });
        }
    };

    const handlePhotoPrints = (event, index) => {
        const { value, checked } = event.target;
        if (checked) {
            setPhotoPrint(value);
            setPhotoPrintPrice(() => {
                const updatedTotal = photoPrintPrices[index];
                setTotal(parseFloat(price) + parseFloat(photoShootPrice) + parseFloat(updatedTotal) + parseFloat(flowerPrice))
                return updatedTotal;
            });
        } else {
            setPhotoPrint("");
            setPhotoPrintPrice(() => {
                setTotal(parseFloat(total) - parseFloat(photoPrintPrice))
                return 0;
            });
        }
    };

    const handleFlowers = (event, index) => {
        const { value, checked } = event.target;
        if (checked) {
            setFlower(value);
            setFlowerPrice(() => {
                const updatedTotal = flowersPrices[index];
                setTotal(parseFloat(price) + parseFloat(photoShootPrice) + parseFloat(photoPrintPrice) + parseFloat(updatedTotal))
                return updatedTotal;
            });
        } else {
            setFlower("");
            setFlowerPrice(() => {
                setTotal(parseFloat(total) - parseFloat(flowerPrice))
                return 0;
            });
        }
    };





    // =============================================
    return (
        <>
            <div className='container-fluid '>
                <div className='row' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <Navbar />

                        </div>

                        <div className='row BTB_cart_row1'>

                        </div>
                        <div className='row'>
                            <div className='col-lg-12 mt-4'>
                                <h1 className='text-center'
                                    style={{ color: 'orange', fontFamily: '"Bebas Neue", sans-serif' }}>
                                    {subcatres.reser_main_title}</h1>
                                <h6>{subcatres.reser_title}</h6>
                            </div>

                            <div className='col-lg-12'>
                                <h4 className='text-center'
                                    style={{ color: 'orange', fontFamily: '"Bebas Neue", sans-serif' }}>
                                    {subcatres.cat_title}</h4>
                            </div>
                        </div>
                        <div className='row BTB_cart_row12'>
                            <div className='col-lg-12 p-5'>
                                <h2>
                                    {subcatres.description}
                                </h2>
                            </div>
                        </div>

                        <div className='row BTB_cart_row2'>
                            <div className='col-sm-4 BTB_cart_row2_1 customsubslide'>
                                {(refreshKey != 0 && mainImages.length > 0) ?
                                    // <MenuSlider menuImages={menuImages} />
                                    <CustomSubSlider images={mainImages} />
                                    : ""}
                                <h3 className='orange'>CODE : {subcatres.sub_tilte}</h3>
                                <h2 className='green'>₹{price}</h2>
                            </div>

                            <div className="col-sm-4">
                                <Status msg={status.msg} type={status.type} toggle={status.toggle}
                                    onClose={() => setStatus(empStatus)} />
                                <div style={{ marginTop: '1%', width: '100%' }}>
                                    <div className="BTB_cart_row2_2_1 ">

                                        <div className='p-3'>
                                            <h4>Date <span className='green'>*</span></h4>
                                            <input type="date" min={minDate} className="required form-control"
                                                onChange={(e) => { setDateError(false); setDate(e.target.value) }} />
                                            {(dateError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                        <div className='p-3'>
                                            <h4>Time <span className='green'>*</span></h4>
                                            <input type="time" min={minTime} className="form-control"
                                                onChange={(e) => { setTimeError(false); setTime(e.target.value) }} />
                                            {(timeError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                        <div className='p-3'>
                                            <h4>No. of People</h4>
                                            <select className="form-control" onChange={(e) => setNumOfPeople(e.target.value)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='p-3'>
                                        <label className='required'>Guest Name</label>
                                        <input type="text" className="form-control p-2" required onChange={(e) => { setGuestNameError(false); setGuestName(e.target.value); }} />
                                        {(guestNameError) ? <span className='error'>This is field required</span> : ""}
                                    </div>




                                    {/* ========================================= */}

                                    <div className='row'>
                                        <div className='col-lg-12 BTB_cart_row2_2_3'>
                                            <div className='p-3 col-sm-4'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Select Cake <span className='green'>*</span></h4>
                                                <select style={{ width: "80%", fontFamily: ' "Abel", sans-serif' }} required className="form-control p-2"
                                                    onChange={(e) => setCake(e.target.value)}>
                                                    <option value="">Choose Cake</option>
                                                    {cakes.map((item, index) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                                {(cakeError) ? <span className='error'>This is field required</span> : ""}

                                            </div>
                                            <div className='p-3 col-sm-8'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Cake Message <span className='green'>*</span></h4>
                                                <input type="text" required style={{ width: "100%", color: "orange", backgroundColor: 'black', fontFamily: ' "Abel", sans-serif' }}
                                                    className="form-control p-2" onChange={(e) => setCakeMsg(e.target.value)} />
                                                {(cakeMsgError) ? <span className='error'>This is field required</span> : ""}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-12 BTB_cart_row2_2_3'>

                                            <div className='p-3  col-sm-6'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Cake Weight <span className='green'>*</span></h4>
                                                <select style={{ fontFamily: ' "Abel", sans-serif' }} required className="form-control"
                                                    onChange={(e) => setCakeWeight(e.target.value)}>
                                                    <option value="">Choose Cake Weight</option>
                                                    {cakeWeightArr.map((item, index) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                                {(cakeWeightError) ? <span className='error'>This is field required</span> : ""}
                                            </div>
                                            <div className='p-3  col-sm-6'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }} >Cake Shape <span className='green'>*</span></h4>
                                                <select style={{ fontFamily: ' "Abel", sans-serif' }}  className="form-control"
                                                    onChange={(e) => setCakeShape(e.target.value)}>
                                                    <option value="">Choose Cake Shape</option>
                                                    {cakeShapeArr.map((item, index) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                                {(cakeShapeError) ? <span className='error'>This is field required</span> : ""}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='p-3 mt-5' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button type='button' className='btn home_action2_btn ' onClick={handleSubmit}>Book NOW for <span className='fs-24 green'>₹{total} </span></button>
                                </div>
                            </div>
                            <div className='col-sm-4'>

                                <div className="mt-2">
                                    <div className='p-3'>
                                        <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Photo Shoot</h4>
                                        <div className='btn_select row'>
                                            {photoShoots.length > 0 && photoShoots.map((item, index) => {
                                                return (
                                                    <>
                                                        <div className='col-sm-4 non-breaking-text'>
                                                            <span key={index} className="" style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '0px' }}>
                                                                {photoShoots[index]}:
                                                                <span className="green">{`  `}₹{photoShootPrices[index]}</span>
                                                            </span>&nbsp;
                                                            <input
                                                                name='PhotoShootCheckbox'
                                                                value={photoShoots[index]}
                                                                type="checkbox"
                                                                checked={photoShoot === item}
                                                                onChange={(e) => handlePhotoShoots(e, index)}
                                                            />
                                                        </div>
                                                    </>)
                                            })}
                                        </div>
                                    </div>

                                    <div className='p-3'>
                                        <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Photo Print</h4>
                                        <div className='btn_select row'>
                                            {photoPrints.length > 0 && photoPrints.map((item, index) => {
                                                return (
                                                    <>
                                                        <div className='col-sm-5 non-breaking-text'>
                                                            <span key={index} className="" style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '0px' }}>
                                                                {photoPrints[index]}: <span className="green">{`  `}₹{photoPrintPrices[index]}</span>
                                                            </span>&nbsp;
                                                            <input
                                                                name='PhotoShootCheckbox'
                                                                value={photoPrints[index]}
                                                                type="checkbox"
                                                                checked={photoPrint === item}
                                                                onChange={(e) => handlePhotoPrints(e, index)}
                                                            />
                                                        </div>
                                                    </>)
                                            })}

                                        </div>
                                    </div>


                                    <div className='p-3'>
                                        <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Flower Bouquet</h4>
                                        <div className='btn_select row'>
                                            {flowers.length > 0 && flowers.map((item, index) => {
                                                return (
                                                    <>
                                                        <div className='col-sm-4 non-breaking-text'>
                                                            <span key={index} className="non-breaking-text" style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '0px' }}>
                                                                {flowers[index]}: <span className="green">{`  `}₹{flowersPrices[index]}</span>
                                                            </span>&nbsp;
                                                            <input
                                                                name='PhotoShootCheckbox'
                                                                value={flowers[index]}
                                                                type="checkbox"
                                                                checked={flower === item}
                                                                onChange={(e) => handleFlowers(e, index)}
                                                            />
                                                        </div>
                                                    </>)
                                            })}
                                        </div>
                                    </div>

                                </div>

                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <div className='p-3'>
                                            <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Add Comments</h4>
                                            <input type="text" style={{ width: '100%', color: "orange", backgroundColor: 'black', fontFamily: ' "Abel", sans-serif' }} className="form-control p-2" onChange={(e) => setComment(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div >
        </>
    )
}






export default BtbCart
