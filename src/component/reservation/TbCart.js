import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../Navbar";
import '../../theme/css-component/TB_cart.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from '@mui/material';



const TbCart = () => {
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
    // const [selectedVegOrNonVeg, setSelectedVegOrNonVeg] = useState('veg');



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("userid :", user_id);
        console.log("reser_id :", res_id);
        console.log("reser_catid :", res_cat_id);
        console.log("resersubcatid :", res_scat_id);
        console.log("type:", "TA");
        console.log("date:", date);
        console.log("time:", time);
        console.log("peoples:", numOfPeople);
        // console.log("menu_type:", selectedVegOrNonVeg);
        // console.log("Selected Menu:", selectedMenu);

        const formData = new FormData();
        formData.append('userid', user_id);
        formData.append('reser_id', res_id);
        formData.append('reser_catid', res_cat_id);
        formData.append('resersubcatid', res_scat_id);
        formData.append('type', "TA");
        formData.append("date", date);
        formData.append("time", time);
        formData.append("peoples", numOfPeople);
        // formData.append("menu_type", selectedVegOrNonVeg);

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



    return (
        <>
            <div className='container-fluid '>
                <div className='row' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <Navbar />

                        </div>
                        <div className='row TB_cart_row1'>

                        </div>
                        <div className='row'>
                            <div className='col-lg-12 '>
                                <h1 className='text-center' style={{ color: 'orange' , fontFamily:"Bebas Neue, sans-serif" }}>TABLE- BOOKING</h1>
                            </div>
                        </div>
                        <div className='row BTB_cart_row12'>
                            <div className='col-lg-12'>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita doloremque quibusdam iusto, error accusantium facere minima asperiores soluta. Quos recusandae reprehenderit dolores ratione numquam blanditiis inventore, tenetur autem cumque!</h2>

                            </div>

                        </div>

                        <div className='row TB_cart_row2'>

                            <div className='col-lg-12 TB_cart_row2_1'>
                                <img style={{ border: '1px solid orange', borderRadius: '10%' }} 
                                src="" alt="" />
                                <h2>CODE : SL-CLD001</h2>

                                <div>

                                    <div className='p-3 w-50' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <h4>Date</h4>
                                        <input style={{ width: '100%' }} type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div className='p-3' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <h4>Time</h4>
                                        <input style={{ width: '100%' }} type="time" className="form-control" onChange={(e) => setTime(e.target.value)} />
                                    </div>
                                    <div className='p-3' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <h4>No. of People</h4>
                                        <input style={{ width: '100%' }} type="number" className="form-control" onChange={(e) => setNumOfPeople(e.target.value)} />
                                    </div>
                                    {/* <div className='p-3' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <h4>Type</h4>
                                        <select className="form-control p-2" onChange={(e) => setSelectedVegOrNonVeg(e.target.value)}>
                                            <option value="1">Veg</option>
                                            <option value="2">Non-Veg</option>
                                        </select>                                    </div> */}
                                </div>


                            </div>

                            <div className='col-lg-12 '>
                                <div className='p-3' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                    <button type='button' className='btn home_action2_btn ' onClick={handleSubmit}>Book NOW</button>

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

export default TbCart
