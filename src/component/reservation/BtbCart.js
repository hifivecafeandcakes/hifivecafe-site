import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import TextField from '@mui/material/TextField';
import '../../theme/css-component/BTB_cart.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';


import Sidebar from '../Sidebar'
import ReactPlayer from 'react-player'
import vid1 from '../../theme/video/vid1.webm'
import vid2 from '../../theme/video/vid2.mp4'
import vid3 from '../../theme/video/vid3.mp4'



const BtbCart = () => {


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




    // ----------------------------------------------------------------------------
    const user_id = localStorage.getItem("user_id")

    useEffect(() => {
        if (!user_id) {
            window.location.href = '/login';
        }
    }, []);

    const res_id = localStorage.getItem('res_id');
    const res_cat_id = localStorage.getItem('res_cat_id');
    const res_scat_id = localStorage.getItem('res_scat_id');




    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [decription, setDecription] = useState('');
    const [Flavour, setFlavour] = useState('');

    const [Fc_Id, setFC_Id] = useState(null);
    const [FireCracker, setFireCracker] = useState([]);
    const [SelectedFC, setSelectedFC] = useState({});
    const [selectedFcAmount, setSelectedFcAmount] = useState(500);
    const [isFcChecked, setIsFcChecked] = useState(false);

    const [B_Id, setB_Id] = useState(null);
    const [Bouquet, setBouquet] = useState([]);
    const [SelectedB, setSelectedB] = useState({});
    const [selectedBAmount, setSelectedBAmount] = useState(300);
    const [isBChecked, setIsBChecked] = useState(false);

    const [PS_Id, setPS_Id] = useState(null);
    const [PhotoShoot, setPhotoShoot] = useState([]);
    const [SelectedPS, setSelectedPS] = useState({});
    const [selectedPSAmount, setSelectedPSAmount] = useState(1500);
    const [isPSChecked, setIsPSChecked] = useState(false);

    const [PH_Id, setPH_Id] = useState(null);
    const [PhotoHangings, setPhotoHangings] = useState([]);
    const [SelectedPH, setSelectedPH] = useState({});
    const [selectedPHAmount, setSelectedPHAmount] = useState(300);
    const [isPHChecked, setIsPHChecked] = useState(false);



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/birthday/category/get?reser_cat_id=2&type=fc`)
            .then((res) => {
                let data = res?.data;

                if (data.result.length > 0) {
                    setFireCracker(data.result[0].pricelist)
                } else {
                    console.log("No data found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, []);


    const handleFcChange = (e) => {
        setIsFcChecked(false)
        const selectedItem = e.target.value;
        setSelectedFC(selectedItem);
        const data = FireCracker.filter((item) => item.menu_sub_id == selectedItem)
        setSelectedFcAmount(data[0].amount ? data[0].amount : '');
        setFC_Id(selectedItem)
    };

    const handleFcStaChange = () => {
        setIsFcChecked(!isFcChecked);
        if (!isFcChecked && Object.keys(SelectedFC).length === 0) {
            setFC_Id(FireCracker[0].menu_sub_id);
        }
    };



    console.log('B_Id :', B_Id);
    console.log('FC_Id :', Fc_Id);
    console.log('PS_Id :', PS_Id);
    console.log('PH_Id :', PH_Id);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/birthday/category/get?reser_cat_id=2&type=B`)
            .then((res) => {
                let data = res?.data;

                if (data.result.length > 0) {
                    setBouquet(data.result[0].pricelist)
                } else {
                    console.log("No data found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, []);


    const handleBChange = (e) => {
        setIsBChecked(false)
        const selectedItem = e.target.value;
        setSelectedB(selectedItem);
        const data = Bouquet.filter((item) => item.menu_sub_id == selectedItem)
        setSelectedBAmount(data[0].amount ? data[0].amount : '');
        setB_Id(selectedItem)
    };

    const handleBStaChange = () => {
        setIsBChecked(!isBChecked);
        if (!isBChecked && Object.keys(SelectedB).length === 0) {
            setB_Id(Bouquet[0].menu_sub_id)
        }
    };


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/birthday/category/get?reser_cat_id=2&type=PS`)
            .then((res) => {
                let data = res?.data;

                if (data.result.length > 0) {
                    setPhotoShoot(data.result[0].pricelist)
                } else {
                    console.log("No data found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, []);


    const handlePSChange = (e) => {
        setIsPSChecked(false)
        const selectedItem = e.target.value;
        setSelectedPS(selectedItem);
        const data = PhotoShoot.filter((item) => item.menu_sub_id == selectedItem)
        setSelectedPSAmount(data[0].amount ? data[0].amount : '');
        setPS_Id(selectedItem)
    };

    const handlePSStaChange = () => {
        setIsPSChecked(!isPSChecked);
        if (!isPSChecked && Object.keys(SelectedPS).length === 0) {
            setPS_Id(PhotoShoot[0].menu_sub_id)
        }
    };




    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/birthday/category/get?reser_cat_id=2&type=PH`)
            .then((res) => {
                let data = res?.data;

                if (data.result.length > 0) {
                    console.log("RES :", data.result[0].pricelist);
                    setPhotoHangings(data.result[0].pricelist)
                } else {
                    console.log("No data found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, []);


    const handlePHChange = (e) => {
        setIsPHChecked(false)
        const selectedItem = e.target.value;
        setSelectedPH(selectedItem);
        const data = PhotoHangings.filter((item) => item.menu_sub_id == selectedItem)
        setSelectedPHAmount(data[0].amount ? data[0].amount : '');
        setPH_Id(selectedItem)
    };

    const handlePHStaChange = () => {
        setIsPHChecked(!isPHChecked);
        if (!isPHChecked && Object.keys(SelectedPH).length === 0) {
            setPH_Id(PhotoHangings[0].menu_sub_id)
        }
    };



    const handleFlavourChange = (e) => {
        console.log("Flavour :", e.target.value);
        setFlavour(e.target.value);
    };




    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("userid :", user_id);
        console.log("reser_id :", res_id);
        console.log("reser_catid :", res_cat_id);
        console.log("resersubcatid :", res_scat_id);
        console.log("type:", "BP");
        console.log("date:", date);
        console.log("time:", time);
        console.log("peoples:", numOfPeople);
        console.log("photohanging:", PH_Id);
        console.log("photoshoot:", PS_Id);
        console.log("bouquet:", B_Id);
        console.log("firecracks:", Fc_Id);
        console.log("decription:", decription);
        console.log("Flavour:", Flavour);

        const formData = new FormData();
        formData.append('userid', user_id);
        formData.append('reser_id', res_id);
        formData.append('reser_catid', res_cat_id);
        formData.append('resersubcatid', res_scat_id);
        formData.append("type", "BP");
        formData.append("date", date);
        formData.append("time", time);
        formData.append("peoples", numOfPeople);
        formData.append("photohanging", PH_Id);
        formData.append("photoshoot", PS_Id);
        formData.append("bouquet", B_Id);
        formData.append("firecracks", Fc_Id);
        formData.append("decription", decription);
        formData.append("flaver", Flavour);
        formData.append("party_amt", Flavour);


        axios
            .post(`${process.env.REACT_APP_API_URL}/reservationbooking/api`, formData)
            .then(function (res) {
                console.log("RESPONSE :", res.data);
                if (res?.data?.Response?.Success == '1') {
                    alert('Success.');
                    window.location.href = '/reservation';
                } else if (res.data.message == 'Give Valid Id') {
                    alert('Give Valid Id');
                } else {
                    console.log('execution error');
                }
            })
            .catch((error) => {
                console.error('fetching error:', error);
            });
    }



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
                            <div className='col-lg-12  btb_cart_col1'>
                                <h1 className='text-center' style={{ color: 'orange' }}>BIRTHDAY PARTY EVENT - BOOKING</h1>
                            </div>
                        </div>

                        <div className='row BTB_cart_row12'>
                            <div className='col-lg-12'>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita doloremque quibusdam iusto, error accusantium facere minima asperiores soluta. Quos recusandae reprehenderit dolores ratione numquam blanditiis inventore, tenetur autem cumque!</h2>

                            </div>

                        </div>

                        <div className='row BTB_cart_row2'>

                            <div className='col-lg-6 BTB_cart_row2_1'>
                                {/* <Slider  {...settings} style={{ width: '60%', height: '60%' }} >
                                    <div>
                                        <img src="" style={{ width: '100%', height: "60vh", borderRadius: '10%' }} />
                                    </div>
                                    <div>
                                        <img src="" style={{ width: '100%', height: "60vh", borderRadius: '10%' }} />
                                    </div>
                                    {/* Add more images as needed */}
                                {/* </Slider> */}

                                <div className='BTB_cart_row2_1_1'>
                                    <img src="" alt="" />

                                </div>
                                <div className='BTB_cart_row2_1_2'>
                                    <img src="" alt="" />


                                </div>



                            </div>






                            <div className="col-lg-6 BTB_cart_row2_2 ">


                                <div style={{ marginTop: '5%', width: '100%' }}>


                                    <div className="BTB_cart_row2_2_1 ">
                                        <div className='p-3'>
                                            <h4>Date</h4>
                                            <input style={{ color: 'orange', backgroundColor: 'black', width: '100%', padding: '5%' }} type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                        <div className='p-3'>
                                            <h4>Time</h4>
                                            <input style={{ color: 'orange', backgroundColor: 'black', width: '100%', padding: '5%' }} type="time" className="form-control" onChange={(e) => setTime(e.target.value)} />
                                        </div>
                                        <div className='p-3'>
                                            <h4>No. of People</h4>
                                            <input style={{ color: 'orange', backgroundColor: 'black', width: '100%', padding: '5%' }} type="number" className="form-control" onChange={(e) => setNumOfPeople(e.target.value)} />
                                        </div>
                                    </div>


                                    {/* ========================================== */}



                                    <div className="d-flex flex-column justify-content-between mt-3">

                                        <div className='p-3'>
                                            <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Photo Hangings</h4>
                                            <div className='btn_select'>
                                                <select className="form-control" onChange={handlePHChange} value={SelectedPH}>
                                                    <option value="" disabled>Select an option</option>
                                                    {PhotoHangings.length && PhotoHangings.map((item) => (
                                                        <option key={item.menu_sub_id} value={item.menu_sub_id}>
                                                            {item.menu_sub_title}
                                                        </option>
                                                    ))}
                                                </select>
                                                {selectedPHAmount && (
                                                    <>
                                                        <span style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '10px' }}>
                                                            ₹ {selectedPHAmount}
                                                        </span>
                                                        <input
                                                            name='PhotoHangingsCheckbox'
                                                            value='PhotoHangingsCheckbox'
                                                            type="checkbox"
                                                            style={{ marginLeft: '10px' }}
                                                            checked={isPHChecked}
                                                            onChange={handlePHStaChange}
                                                            id="PhotoHangings"
                                                        />
                                                        {/* <label htmlFor="bouquetCheckbox"></label> */}
                                                    </>
                                                )}
                                            </div>
                                        </div>




                                        <div className='p-3'>
                                            <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Photo Shoot</h4>
                                            <div className='btn_select'>
                                                <select className="form-control" onChange={handlePSChange} value={SelectedPS}>
                                                    <option value="" disabled>Select an option</option>
                                                    {PhotoShoot.length && PhotoShoot.map((item) => (
                                                        <option key={item.menu_sub_id} value={item.menu_sub_id}>
                                                            {item.menu_sub_title}
                                                        </option>
                                                    ))}
                                                </select>
                                                {selectedPSAmount && (
                                                    <>
                                                        <span style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '10px' }}>
                                                            ₹ {selectedPSAmount}
                                                        </span>
                                                        <input
                                                            name='PhotoShootCheckbox'
                                                            value='PhotoShootCheckbox'
                                                            type="checkbox"
                                                            style={{ marginLeft: '10px' }}
                                                            checked={isPSChecked}
                                                            onChange={handlePSStaChange}
                                                            id="bouquetCheckbox"
                                                        />
                                                        {/* <label htmlFor="bouquetCheckbox"></label> */}
                                                    </>
                                                )}
                                            </div>
                                        </div>



                                        <div className='p-3'>
                                            <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Bouquet</h4>
                                            <div className='btn_select'>
                                                <select className="form-control" onChange={handleBChange} value={SelectedB}>
                                                    <option value="" disabled>Select an option</option>
                                                    {Bouquet.length && Bouquet.map((item) => (
                                                        <option key={item.menu_sub_id} value={item.menu_sub_id}>
                                                            {item.menu_sub_title}
                                                        </option>
                                                    ))}
                                                </select>
                                                {selectedBAmount && (
                                                    <>
                                                        <span style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '10px' }}>
                                                            ₹ {selectedBAmount}
                                                        </span>
                                                        <input
                                                            name='bouquetCheckbox'
                                                            value='bouquetCheckbox'
                                                            type="checkbox"
                                                            style={{ marginLeft: '10px' }}
                                                            checked={isBChecked}
                                                            onChange={handleBStaChange}
                                                            id="bouquetCheckbox"
                                                        />
                                                        {/* <label htmlFor="bouquetCheckbox"></label> */}
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <div className='p-3'>
                                            <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Fire Crackers</h4>
                                            <div className='btn_select'>
                                                <select className="form-control" onChange={handleFcChange} value={SelectedFC}>
                                                    <option value="" disabled>Select an option</option>
                                                    {FireCracker.length && FireCracker.map((item) => (
                                                        <option key={item.menu_sub_id} value={item.menu_sub_id}>
                                                            {item.menu_sub_title}
                                                        </option>
                                                    ))}
                                                </select>
                                                {selectedFcAmount && (
                                                    <>
                                                        <span style={{ fontFamily: ' "Abel", sans-serif', color: '#fcb713', marginLeft: '10px' }}>
                                                            ₹ {selectedFcAmount}
                                                        </span>
                                                        <input
                                                            name='fireCrackersCheckbox'
                                                            value='fireCrackersCheckbox'
                                                            type="checkbox"
                                                            style={{ marginLeft: '10px' }}
                                                            checked={isFcChecked}
                                                            onChange={handleFcStaChange}
                                                            id="fireCrackersCheckbox"
                                                        />
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* ========================================= */}

                                    <div className='row'>
                                        <div className='col-lg-12 BTB_cart_row2_2_3'>

                                            <div className='p-3 '>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Select Flavour</h4> <br />
                                                <select style={{ width: '140%', fontFamily: ' "Abel", sans-serif' }} className="form-control"
                                                    onChange={handleFlavourChange}>
                                                    <option value="">Select Flavour</option>
                                                    <option value="Fresh Cream">Fresh Cream</option>
                                                    <option value="ChocoTruffle">Choco Truffle</option>
                                                    <option value="RedVelvet">Red Velvet</option>
                                                    <option value="Butterscotch">Butterscotch</option>
                                                </select>
                                            </div>









                                            <div className='p-3 mx-5'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Cake Message</h4> <br />
                                                <textarea style={{ color: "orange", backgroundColor: 'black', fontFamily: ' "Abel", sans-serif' }} cols="25" rows="2" onChange={(e) => setDecription(e.target.value)} ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12 BTB_cart_row2_2_3'>

                                            <div className='p-3 '>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Select Flavour</h4> <br />
                                                <select style={{ width: '140%', fontFamily: ' "Abel", sans-serif' }} className="form-control"
                                                    onChange={handleFlavourChange}>
                                                    <option value="">Select Flavour</option>
                                                    <option value="Fresh Cream">Fresh Cream</option>
                                                    <option value="ChocoTruffle">Choco Truffle</option>
                                                    <option value="RedVelvet">Red Velvet</option>
                                                    <option value="Butterscotch">Butterscotch</option>
                                                </select>
                                            </div>










                                            <div className='p-3 mx-5'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Cake Message</h4> <br />
                                                <textarea style={{ color: "orange", backgroundColor: 'black', fontFamily: ' "Abel", sans-serif' }} cols="25" rows="2" onChange={(e) => setDecription(e.target.value)} ></textarea>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='row'>
                                        <div className='col-lg-12 BTB_cart_row2_2_3'>

                                            <div className='p-3'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Cake Weight</h4> <br />
                                                <select style={{ width: '140%', fontFamily: ' "Abel", sans-serif' }} className="form-control"
                                                    onChange={handleFlavourChange}>
                                                    <option value="">Select Cake Weight</option>
                                                    <option value="Fresh Cream">0.5 kg</option>
                                                    <option value="ChocoTruffle" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <span>1kg</span>
                                                        <span style={{ marginLeft: '5vh' }}>200</span>
                                                    </option>
                                                    <option value="RedVelvet">2 kg</option>
                                                    <option value="Butterscotch">3 kg</option>
                                                    <option value="Butterscotch">5 kg</option>
                                                    <option value="Butterscotch">5 kg</option>
                                                </select>
                                            </div>





                                            <div className='p-3' style={{ marginLeft: '8vh' }}>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Cake Shape</h4> <br />
                                                <select style={{ width: '140%', fontFamily: ' "Abel", sans-serif' }} className="form-control"
                                                    onChange={handleFlavourChange}>
                                                    <option value="">Select Cake Shape</option>
                                                    <option value="ChocoTruffle">Heart</option>
                                                    <option value="ChocoTruffle">Round</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='row'>
                                        <div className='col-lg-12 BTB_cart_row2_2_3'>

                                            <div className='p-3'>
                                                <h4 style={{ fontFamily: ' "Abel", sans-serif' }}>Add Description</h4> <br />
                                                <textarea style={{ color: "orange", backgroundColor: 'black', fontFamily: ' "Abel", sans-serif' }} cols="55" rows="3" onChange={(e) => setDecription(e.target.value)} ></textarea>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='p-3' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                        <button type='button' className='btn home_action2_btn ' onClick={handleSubmit}>Book NOW</button>

                                    </div>






                                </div>
                            </div>




                            {/* ============================================ */}



                        </div>




                        {/* ===================================================================================== */}


                    </div>
                </div>
            </div>

        </>
    )
}






export default BtbCart
