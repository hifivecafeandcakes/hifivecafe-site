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
import { cakesArr, timeSlotsArr, ledArr, ledPricesArr, ageArr, agePricesArr, firesArr, firesPricesArr, balloonThemeArr, photoShootsArr, photoShootPricesArr, photoPrintsArr, photoPrintPricesArr, flowersArr, flowersPricesArr, vegmenus, nonvegmenus } from '../common/Candle';
import Footer from './Footer';
import validator from '../validate.ts';


const CltCart = () => {
    const user_id = localStorage.getItem("user_id")
    const res_id = localStorage.getItem('res_id');
    const res_cat_id = localStorage.getItem('res_cat_id');
    const res_scat_id = localStorage.getItem('res_scat_id');

    const res_code = localStorage.getItem('res_code');
    const res_cat_code = localStorage.getItem('res_cat_code');


    const [isUpdated, setIsUpdated] = useState(false);  // To trigger animation



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
    const [timeSlot, setTimeSlot] = useState('');
    const [guestName, setGuestName] = useState('');
    const [guestWhatsapp, setGuestWhatsapp] = useState('');
    const [numOfPeople, setNumOfPeople] = useState(2);
    const [vegOrNon, setVegOrNon] = useState('Veg');
    const [menu, setMenu] = useState(1);
    const [cake, setCake] = useState('');
    const [cakeMsg, setCakeMsg] = useState('');
    const [comment, setComment] = useState('');

    const [balloonTheme, setBalloonTheme] = useState("");

    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState(0);

    const [menus, setMenus] = useState([]);
    const [vegMenus, setVegMenus] = useState([]);
    const [nonVegMenus, setNonVegMenus] = useState([]);
    const [cakes, setCakes] = useState([]);
    const [timeSlots, setTimeSlots] = useState([]);

    const [vegImages, setVegImages] = useState([]);
    const [nonVegImages, setNonVegImages] = useState([]);

    //Error
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const [timeSlotError, setTimeSlotError] = useState(false);
    const [guestNameError, setGuestNameError] = useState(false);
    const [hasPhoneError, setHasPhoneError] = useState(false);
    // status
    const empStatus = { msg: "", type: "success", toggle: "close" }
    const [status, setStatus] = useState(empStatus);
    const [clickSubmit, setClickSubmit] = useState(false);


    // Slick
    const [refreshKey, setRefreshKey] = useState(0);
    const [slicksetting, setSlicksetting] = useState("");

    // useEffect(() => {

    //     setMenuImages(menuImages);
    // }, [menuImages]);


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

    const [fire, setFire] = useState('');
    const [fires, setFires] = useState([]);
    const [firePrice, setFirePrice] = useState(0);
    const [firesPrices, setFiresPrices] = useState([]);

    const [led, setLed] = useState('');
    const [leds, setLeds] = useState([]);
    const [ledPrice, setLedPrice] = useState(0);
    const [ledsPrices, setLedsPrices] = useState([]);

    const [age, setAge] = useState('');
    const [ages, setAges] = useState([]);
    const [agePrice, setAgePrice] = useState(0);
    const [agesPrices, setAgesPrices] = useState([]);

    const [ledName, setLedName] = useState('');
    const [ageName, setAgeName] = useState('');

    const [ledOption, setLedOption] = useState('No');
    const [ageOption, setAgeOption] = useState('No');

    function settingTotal(curValue, updatedValue) {
        var totalParam = parseFloat(price) + parseFloat(photoShootPrice) + parseFloat(photoPrintPrice)
            + parseFloat(flowerPrice) + parseFloat(firePrice) + parseFloat(ledPrice) + parseFloat(agePrice);
        console.log(totalParam);
        console.log(curValue);
        var settingValue = (totalParam - parseFloat(curValue)) + parseFloat(updatedValue);
        console.log("settingValue");
        console.log(settingValue);
        setTotal(settingValue);
        setIsUpdated(true);
    }

    const handlePhotoShoots = (event, index) => {
        console.log(index);
        setIsUpdated(false);
        const { value, checked } = event.target;
        if (checked) {
            setPhotoShoot(value);
            setPhotoShootPrice(() => {
                const updatedTotal = photoShootPrices[index];
                // setTotal(parseFloat(price) + parseFloat(updatedTotal) + parseFloat(photoPrintPrice) + parseFloat(flowerPrice))
                settingTotal(photoShootPrice, updatedTotal)
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
                settingTotal(photoPrintPrice, updatedTotal)
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
                settingTotal(flowerPrice, updatedTotal)
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


    const handleFires = (event, index) => {
        const { value, checked } = event.target;
        if (checked) {
            setFire(value);
            setFirePrice(() => {
                const updatedTotal = firesPrices[index];
                settingTotal(firePrice, updatedTotal)
                return updatedTotal;
            });
        } else {
            setFire("");
            setFirePrice(() => {
                setTotal(parseFloat(total) - parseFloat(firePrice))
                return 0;
            });
        }
    };

    const handleLeds = (event, index) => {
        const { value, checked } = event.target;
        if (checked) {
            setLed(value);
            setLedPrice(() => {
                const updatedTotal = ledsPrices[index];
                settingTotal(ledPrice, updatedTotal)
                return updatedTotal;
            });
        } else {
            setLed(value);
            // setLedPrice(() => {
            //     setTotal(parseFloat(total) - parseFloat(ledPrice))
            //     return 0;
            // });
        }
    };


    const handleAges = (event, index) => {
        const { value, checked } = event.target;
        if (checked) {
            setAge(value);
            setAgePrice(() => {
                const updatedTotal = agesPrices[index];
                settingTotal(agePrice, updatedTotal)
                return updatedTotal;
            });
        } else {
            setAge(value);
            // setAgePrice(() => {
            //     setTotal(parseFloat(total) - parseFloat(agePrice))
            //     return 0;
            // });
        }
    };

    const handleLedChange = (event) => {
        setLedOption(event.target.value);
        if (event.target.value === "No") {
            setLedName("")
            setLed("")
            setLedPrice(0)
            setTotal(parseFloat(total) - parseFloat(ledPrice))
        } else {
            setLed(leds[0])
            setLedPrice(ledsPrices[0])
            settingTotal(ledPrice, ledsPrices[0])
        }
    };

    const handleAgeChange = (event) => {
        setAgeOption(event.target.value);
        if (event.target.value === "No") {
            setAgeName("")
            setAge("")
            setAgePrice(0)
            setTotal(parseFloat(total) - parseFloat(agePrice))
        } else {
            setAge(ages[0])
            setAgePrice(agesPrices[0])
            settingTotal(agePrice, agesPrices[0])
        }
    };



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

                    if (reservation_subcategory[0].veg_images.length > 0) {
                        var arr_img = reservation_subcategory[0].veg_images;
                        setVegImages([...arr_img]);
                        setMenuImages([...arr_img]);
                    }
                    if (reservation_subcategory[0].nonveg_images.length > 0) {
                        var arr_img = reservation_subcategory[0].nonveg_images;
                        setNonVegImages([...arr_img]);
                    }
                    if (reservation_subcategory[0].veg_menus.length > 0) {
                        var arr_menus = reservation_subcategory[0].veg_menus;
                        setMenus([...arr_menus]);
                        setVegMenus([...arr_menus]);
                    } else {
                        setMenus([...vegmenus]);
                        setVegMenus([...vegmenus]);
                    }
                    if (reservation_subcategory[0].nonveg_menus.length > 0) {
                        var arr_menus = reservation_subcategory[0].nonveg_menus;
                        setNonVegMenus([...arr_menus]);
                    } else {
                        setNonVegMenus([...nonvegmenus]);
                    }

                    var arr_cakes = []
                    if (reservation_subcategory[0].cakes.length > 0) {
                        arr_cakes = reservation_subcategory[0].cakes;
                        setCakes([...arr_cakes]);
                    } else {
                        setCakes([...cakesArr]);
                        arr_cakes = cakesArr;
                    }


                    var arr_photoShoots = (reservation_subcategory[0].photoShoots.length > 0) ? reservation_subcategory[0].photoShoots : photoShootsArr;
                    var arr_photoShootPrices = (reservation_subcategory[0].photoShootPrices.length > 0) ? reservation_subcategory[0].photoShootPrices : photoShootPricesArr;
                    var arr_photoPrints = (reservation_subcategory[0].photoPrints.length > 0) ? reservation_subcategory[0].photoPrints : photoPrintsArr;
                    var arr_photoPrintPrices = (reservation_subcategory[0].photoPrintPrices.length > 0) ? reservation_subcategory[0].photoPrintPrices : photoPrintPricesArr;
                    var arr_flowers = (reservation_subcategory[0].flowers.length > 0) ? reservation_subcategory[0].flowers : flowersArr;
                    var arr_flowersPrices = (reservation_subcategory[0].flowersPrices.length > 0) ? reservation_subcategory[0].flowersPrices : flowersPricesArr;
                    // var arr_fires = (reservation_subcategory[0].fires.length > 0) ? reservation_subcategory[0].fires : firesArr;
                    // var arr_firesPrices = (reservation_subcategory[0].firesPrices.length > 0) ? reservation_subcategory[0].firesPrices : firesPricesArr;
                    var arr_fires = firesArr;
                    var arr_firesPrices = firesPricesArr;
                    var arr_leds = ledArr;
                    var arr_ledsPrices = ledPricesArr;
                    var arr_ages = ageArr;
                    var arr_agesPrices = agePricesArr;

                    var arr_timeSlots = timeSlotsArr;
                    setTimeSlots([...arr_timeSlots]);


                    setCakes([...arr_cakes]);
                    setPhotoShoots([...arr_photoShoots]);
                    setPhotoShootPrices([...arr_photoShootPrices]);
                    setPhotoPrints([...arr_photoPrints]);
                    setPhotoPrintPrices([...arr_photoPrintPrices]);
                    setFlowers([...arr_flowers]);
                    setFlowersPrices([...arr_flowersPrices]);
                    setFires([...arr_fires]);
                    setFiresPrices([...arr_firesPrices]);

                    setLeds([...arr_leds]);
                    setLedsPrices([...arr_ledsPrices]);

                    setAges([...arr_ages]);
                    setAgesPrices([...arr_agesPrices]);

                    setTotal(parseFloat(reservation_subcategory[0].sub_cat_price_range))
                    setPrice(parseFloat(reservation_subcategory[0].sub_cat_price_range))
                }
                else {
                    console.log("No data found.");
                }
            }
            else {
                setStatus({ msg: res?.data?.Response?.Message, type: "error", toggle: "open" })
                console.log("Error fetching data");
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

    function changeVegNonVeg(v) {
        if (v == "Veg") {
            setMenus(vegMenus);
            console.log(vegImages)
            setMenuImages(vegImages);
        } else {
            setMenus(nonVegMenus);
            console.log(nonVegImages)
            setMenuImages(nonVegImages);
        }
    }

    function changeWhatsapp(v) {
        console.log(validator.indianPhoneNo(v));
        (validator.indianPhoneNo(v)) ? setHasPhoneError(true) : setHasPhoneError(false); setGuestWhatsapp(v);
    }


    const changeTimeSlot = async (v) => {
        try {
            const formData = new FormData();
            formData.append('userid', user_id);
            formData.append("date", date);
            formData.append("res_scat_id", res_scat_id);
            formData.append("time_slot", v);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/check/booking/time_slot`, formData)
            console.log(res.data.Response);
            if (res.data.Response.Success == 1) {
                let bkd_count = res.data.Response.Result.count;
                console.log(bkd_count);
                if (bkd_count > 0) {
                    console.log(bkd_count);
                    setTimeSlot(() => {
                        setStatus({ msg: `The slot for ${date} during ${v} has already been booked. Please use other table in ${subcatres.reser_main_title} - ${subcatres.cat_title}`, type: "error", toggle: "open" })
                        return ''; // Return the new state for timeSlot
                    });

                } else {
                    setTimeSlot(v);
                }
            }
            else {
                console.error("Error fetching data1");
                setTimeSlot(v);
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('userid', user_id);

        (date == "") ? setDateError(true) : setDateError(false);
        (timeSlot == "") ? setTimeSlotError(true) : setTimeSlotError(false);
        (guestName == "") ? setGuestNameError(true) : setGuestNameError(false);

        console.log('guestNameError', guestNameError);
        console.log('dateError', dateError);
        console.log('time', time);
        console.log('timeSlotError', timeSlotError);
        console.log('guestWhatsapp', guestWhatsapp);

        if (guestWhatsapp != "" && (validator.indianPhoneNo(guestWhatsapp))) {
            setHasPhoneError(true)
            return;
        }

        if (guestName == "" || timeSlot == "" || date == "") {
            setStatus({ msg: "Please fill all required (*) fields", type: "error", toggle: "open" })
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
        // if ((time <= currentTime) && selected <= today) {
        if (selected <= today) {
            setStatus({ msg: "Please select a future time.", type: "error", toggle: "open" })
            return;
        }

        if ((ledOption === "Yes") && ledName == "") {
            setStatus({ msg: "Enter the Name for LED", type: "error", toggle: "open" })
            return;
        }

        if ((ageOption === "Yes") && ageName == "") {
            setStatus({ msg: "Enter the Age for LED", type: "error", toggle: "open" })
            return;
        }

        const formData = new FormData();
        formData.append('userid', user_id);
        formData.append('reser_id', res_id);
        formData.append('reser_catid', res_cat_id);
        formData.append('resersubcatid', res_scat_id);
        formData.append('type', res_code);

        formData.append("date", date);
        formData.append("time", currentTime);
        formData.append("time_slot", timeSlot);
        formData.append("peoples", numOfPeople);
        formData.append("menu_type", menu);
        formData.append("veg_or_nonveg", vegOrNon);
        formData.append("guest_name", guestName);
        formData.append("cake", cake);
        formData.append("cake_msg", cakeMsg);
        formData.append("remarks", comment);
        formData.append("guest_whatsapp", guestWhatsapp);
        formData.append("balloon_theme", balloonTheme);

        formData.append("total", total);
        formData.append("price", price);


        //additional info
        formData.append("photoShoot", photoShoot);
        formData.append("photoShootPrice", photoShootPrice);
        formData.append("photoPrint", photoPrint);
        formData.append("photoPrintPrice", photoPrintPrice);
        formData.append("flower", flower);
        formData.append("flowerPrice", flowerPrice);
        formData.append("fire", fire);
        formData.append("firePrice", firePrice);

        formData.append("ledOption", ledOption);
        formData.append("ledName", ledName);
        formData.append("led", led);
        formData.append("ledPrice", ledPrice);

        formData.append("ageOption", ageOption);
        formData.append("ageName", ageName);
        formData.append("age", age);
        formData.append("agePrice", agePrice);


        try {
            setClickSubmit(true);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/reservation/booking/create`, formData)
            console.log("RESPONSE :", res.data);
            if (res?.data?.Response?.Success == '1') {
                let results = res?.data?.Response?.RazorpayOrder;
                results.booking_id = res?.data?.Response?.ReservationId;
                results.user = res?.data?.Response?.user[0];
                results.booking_info = subcatres.sub_tilte;
                results.totalPrice = total;
                setStatus({ msg: "Booked Successfully!", type: "success", toggle: "open" });
                navigate('/checkout', { state: results });
                // window.location.href = '/reservation';
            } else {
                setStatus({ msg: res?.data?.Response?.Message, type: "error", toggle: "open" })
                setClickSubmit(false);
                console.log('Execution Error');
            }
        } catch (err) {
            setStatus({ msg: "Error in Booking. Try Again", type: "error", toggle: "open" })
            setClickSubmit(false);
            console.log('Fetching Error:', err);
        }
    }

    // function sliders() {
    //     return menuImages.map((item, i) => {
    //         return (
    //             <div key={i + 1}>
    //                 <img src={item}
    //                     alt="img"
    //                     style={{ width: '100%', height: "60vh", borderRadius: '10%' }} />
    //             </div>)
    //     })
    // }
    console.log(mainImages);
    console.log(menu);


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
            <div className='container-fluid candle-div'>
                <div className='row' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <Navbar />
                        </div>
                        <div className='row CLT_cart_row1 mob-mt-90'>
                            {(clickSubmit) ?
                                <div className="loading-container">
                                    <i className="fa fa-spinner fa-spin custom-spinner"></i>
                                </div> : ""}

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
                                <div className='grey'>&ensp;-&ensp;</div>
                                <div><Link to="/sub_cat" className='breadcrums'>{subcatres.reser_main_title}</Link></div>
                                <div className='grey'>&ensp;-&ensp;</div>
                                <div><Link to="/sub_cat_list" className='breadcrums'>{subcatres.cat_title}</Link></div>
                                <div className='grey'>&ensp;-&ensp;</div>
                                <div className='breadcrums-active'> {subcatres.sub_tilte}</div>
                            </div>
                        </div>

                        <div className='row CLT_cart_row2'>

                            <div className='col-lg-3 CLT_cart_row2_1 customsubslide'>
                                {/* <img style={{ border: '1px solid orange', borderRadius: '10%' }}
                                    src={subcatres.sub_img} alt="res sub cat image" /> */}


                                {(refreshKey != 0 && mainImages.length > 0) ?
                                    // <MenuSlider menuImages={menuImages} />
                                    <CustomSubSlider images={mainImages} />
                                    : ""}
                                <h3 className='orange text-center'>CODE : {subcatres.sub_tilte}</h3>
                                <h2 className='green text-center'>₹{price}</h2>
                            </div>
                            <div className="col-lg-6 CLT_cart_row2_2">
                                <div className='CLT_cart_row2_2_div'>
                                    <Status msg={status.msg} type={status.type} toggle={status.toggle} onClose={() => setStatus(empStatus)} />
                                    <div className="row p-2">
                                        <div className='col-lg-3'>
                                            <label className='required'>Date </label>
                                            <input type="date" min={minDate} className="required form-control p-2" onChange={(e) => { setDateError(false); setDate(e.target.value) }} />
                                            {(dateError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                        {/* <div className='col-lg-2'>
                                            <label className='required'>Time </label>
                                            <input type="time" min={minTime} className="form-control p-2" onChange={(e) => { setTimeError(false); setTime(e.target.value) }} />
                                            {(timeError) ? <span className='error'>This is field required</span> : ""}
                                        </div> */}
                                        <div className='col-lg-3'>
                                            <label className='required'>Time Slot</label>
                                            <select className="form-control p-2" value={timeSlot} onChange={(e) => { changeTimeSlot(e.target.value); }}>
                                                <option value="">Choose Time Slot</option>
                                                {timeSlots.map((item, index) => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                            {(timeSlotError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                        {/* </div> */}

                                        {/* <div className="row p-2"> */}
                                        <div className='col-lg-3'>
                                            <label className='required'>Guest Name</label>
                                            <input type="text" maxLength={50} className="form-control p-2" required onChange={(e) => { setGuestNameError(false); setGuestName(e.target.value); }} />
                                            {(guestNameError) ? <span className='error'>This is field required</span> : ""}
                                        </div>
                                        <div className='col-lg-3'>
                                            <label className=''>Guest Whatsapp Number</label>
                                            <input type="number" className="form-control p-2" onChange={(e) => { changeWhatsapp(e.target.value) }} />
                                            {(hasPhoneError) ? <span className='error'>Wrong Phone no format</span> : ""}
                                        </div>
                                    </div>



                                    <div className="row p-2">

                                        <div className='col-md-3'>
                                            <label className='required'>No. of People</label>
                                            <select className="form-control p-2" onChange={(e) => setNumOfPeople(e.target.value)}>
                                                <option value="2">2</option>
                                            </select>
                                        </div>

                                        <div className='col-md-4'>
                                            <label className='required'>Veg or non-veg</label>
                                            <select className="form-control p-2" onChange={(e) => { changeVegNonVeg(e.target.value); setVegOrNon(e.target.value) }}>
                                                <option value="Veg">Veg</option>
                                                <option value="Non-veg">Non-veg</option>
                                            </select>
                                        </div>
                                        <div className='col-md-5'>
                                            <label className='required'>Select Menu <span className='fs-10'>(see menu images)</span></label>
                                            <select className="form-control p-2" onChange={(e) => { setMenu(e.target.value) }}>
                                                {menus.map((item, index) => {
                                                    return (
                                                        <option value={index + 1}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row p-2">
                                        <div className='col-md-4'>
                                            <label>Choose Cake</label>
                                            <select className="form-control p-2" onChange={(e) => setCake(e.target.value)}>
                                                <option value="">Choose Cake</option>
                                                {cakes.map((item, index) => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className='col-md-8'>
                                            <label>Cake Message</label>
                                            <input type="text" maxLength={100} className="form-control p-2" onChange={(e) => setCakeMsg(e.target.value)} />
                                        </div>
                                    </div>


                                    <div className="p-2 fs-12 row">
                                        <div className='col-sm mob-mt-10'>
                                            <h6 style={{ fontFamily: ' "Abel", sans-serif' }}>Photo Shoot</h6>
                                            <div className='btn_select row'>
                                                {photoShoots.length > 0 && photoShoots.map((item, index) => {
                                                    return (
                                                        <>
                                                            <div className='non-breaking-text'>
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

                                        <div className='col-sm fs-12 mob-mt-20'>
                                            <h6 style={{ fontFamily: ' "Abel", sans-serif' }}>Photo Print</h6>
                                            <div className='btn_select row'>
                                                {photoPrints.length > 0 && photoPrints.map((item, index) => {
                                                    return (
                                                        <>
                                                            <div className='non-breaking-text'>
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


                                        <div className='col-sm  mob-mt-20'>
                                            <h6 style={{ fontFamily: ' "Abel", sans-serif' }}>Flower Bouquet</h6>
                                            <div className='btn_select row'>
                                                {flowers.length > 0 && flowers.map((item, index) => {
                                                    return (
                                                        <>
                                                            <div className='non-breaking-text'>
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


                                        <div className='col-sm mob-mt-20'>
                                            <h6 style={{ fontFamily: ' "Abel", sans-serif' }}>Fire Crackers</h6>
                                            <div className='btn_select row'>
                                                {fires.length > 0 && fires.map((item, index) => {
                                                    return (
                                                        <>
                                                            <div className='non-breaking-text'>
                                                                <span key={index} className="non-breaking-text" style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '0px' }}>
                                                                    {fires[index]}: <span className="green">{`  `}₹{firesPrices[index]}</span>
                                                                </span>&nbsp;
                                                                <input
                                                                    name='PhotoShootCheckbox'
                                                                    value={fires[index]}
                                                                    type="checkbox"
                                                                    checked={fire === item}
                                                                    onChange={(e) => handleFires(e, index)}
                                                                />
                                                            </div>
                                                        </>)
                                                })}
                                            </div>
                                        </div>


                                        <div className='col-sm mob-mt-20'>
                                            <h6 style={{ fontFamily: ' "Abel", sans-serif' }}>LED With Name</h6>
                                            <label className='fs-12'><input type="radio" value="Yes" checked={ledOption === 'Yes'} onChange={handleLedChange} /> Yes</label>
                                            <label className='fs-12'><input type="radio" value="No" checked={ledOption === 'No'} onChange={handleLedChange} /> No</label>
                                            {(ledOption === "Yes") ?
                                                <div>
                                                    <label className='required'>Name</label>
                                                    <input type="text" maxLength={30} className="form-control p-1" required onChange={(e) => { setLedName(e.target.value); }} />

                                                    <div className='btn_select row'>
                                                        {leds.length > 0 && leds.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <div className='non-breaking-text'>
                                                                        <span key={index} className="non-breaking-text" style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '0px' }}>
                                                                            {leds[index]}: <span className="green">{`  `}₹{ledsPrices[index]}</span>
                                                                        </span>&nbsp;
                                                                        <input name='ledCheckbox' value={leds[index]} type="checkbox" checked={led === item} onChange={(e) => handleLeds(e, index)} />
                                                                    </div>
                                                                </>)
                                                        })}
                                                    </div>
                                                </div> : ""}
                                        </div>

                                        <div className='col-sm mob-mt-20'>
                                            <h6 style={{ fontFamily: ' "Abel", sans-serif' }}>Age</h6>
                                            <label className='fs-12'><input type="radio" value="Yes" checked={ageOption === 'Yes'} onChange={handleAgeChange} /> Yes</label>
                                            <label className='fs-12'><input type="radio" value="No" checked={ageOption === 'No'} onChange={handleAgeChange} /> No</label>
                                            {(ageOption === "Yes") ?
                                                <div>
                                                    <label className='required'>Age</label>
                                                    <input type="number" className="form-control p-1" required onChange={(e) => { setAgeName(e.target.value); }} />

                                                    <div className='btn_select row'>
                                                        {ages.length > 0 && ages.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <div className='non-breaking-text'>
                                                                        <span key={index} className="non-breaking-text" style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '0px' }}>
                                                                            {ages[index]}: <span className="green">{`  `}₹{agesPrices[index]}</span>
                                                                        </span>&nbsp;
                                                                        <input name='ageCheckbox' value={ages[index]} type="checkbox" checked={age === item} onChange={(e) => handleAges(e, index)} />
                                                                    </div>
                                                                </>)
                                                        })}
                                                    </div>
                                                </div> : ""}
                                        </div>




                                    </div>
                                    <div className='p-2 row'>
                                        {(res_cat_code != "silver") ? //silver not applicable
                                            <div className='col-sm-4'>
                                                <label>Balloon Theme</label>
                                                <select className="form-control p-2" onChange={(e) => setBalloonTheme(e.target.value)}>
                                                    <option value=''>Choose Balloon</option>
                                                    {balloonThemeArr.map((item, index) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            : ""}
                                        <div className='col-sm-8'>
                                            <label>Additional Comments</label>
                                            <input type="text" maxLength={200} className="form-control p-2" onChange={(e) => setComment(e.target.value)} />
                                        </div>
                                    </div>

                                    {/* <div className='p-2' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "30px" }}>
                                        <button type='button' className='btn home_action2_btn' onClick={handleSubmit} >Book NOW</button>
                                    </div> */}
                                    <div className='p-3 mt-4' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <button type='button'
                                            disabled={(clickSubmit) ? true : false}
                                            className='btn home_action2_btn '
                                            onClick={handleSubmit}>
                                            {(clickSubmit) ? <i class="fa fa-spinner fa-spin orangered"></i> : ""}&nbsp;Book NOW for <span className={`fs-24 green ${isUpdated ? 'price-updated' : ''}`}>₹{total} </span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/* =================================== */}

                            <div className='col-lg-3 CLT_cart_row2_3 customslide'>
                                {(refreshKey != 0 && menuImages.length > 0) ?
                                    // <MenuSlider menuImages={menuImages} />
                                    <CustomSlider images={menuImages} menus={menus} />
                                    : ""}

                            </div>

                        </div>
                        {/* ===================================================================================== */}
                        <Footer />
                    </div>
                </div>
            </div >

        </>
    )
}

export default CltCart
